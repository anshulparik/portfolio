"use client";
import React, { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ContactFormError, ContactForm } from "@/utils/type";
import { IoSend } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import { MotionDiv } from "./animations/Motion";

const ContactFormInteraction = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormError>({});
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e?.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors: ContactFormError = {};
    if (!formData?.name) {
      errors.name = "Name is required!";
    }
    if (!formData?.email) {
      errors.email = "Email is required!";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/?.test(formData?.email)
    ) {
      errors.email = "Email is invalid!";
    }
    if (!formData?.message) {
      errors.message = "Message is required!";
    }

    return errors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const validationErrors = validate();
    if (Object?.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
    } else {
      // setErrors({});
      setIsSending(true);
      emailjs
        ?.send(
          process?.env?.NEXT_PUBLIC_SERVICE_KEY as string,
          process?.env?.NEXT_PUBLIC_TEMPLATE_KEY as string,
          formData,
          process?.env?.NEXT_PUBLIC_OPTION_KEY as string
        )
        .then((response: EmailJSResponseStatus) => {
          console.log("SUCCESS!", response?.status, response?.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error: Error) => {
          console.log("FAILED!", error);
          toast?.error("Oops! Something went wrong. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center overflow-x-hidden"
    >
      <MotionDiv
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-4 w-full md:w-[60%]"
      >
        <input
          type="text"
          id="name"
          name="name"
          value={formData?.name}
          placeholder="Enter your name."
          onChange={handleChange}
          autoComplete="off"
          className={`mb-2 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 focus:outline-none placeholder:text-neutral-400 
            focus:bg-transparent focus:text-primary  ${
              formData?.name ? "focus:border-primary" : ""
            }`}
        />
        {errors?.name && (
          <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
            <MdErrorOutline />
            {errors?.name}
          </p>
        )}
      </MotionDiv>
      <MotionDiv
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1.5 }}
        className="mb-4 w-full md:w-[60%]"
      >
        <input
          type="email"
          id="email"
          name="email"
          value={formData?.email}
          placeholder="Enter your email address."
          onChange={handleChange}
          autoComplete="off"
          className={`mb-2 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 focus:outline-none placeholder:text-neutral-400 
            focus:bg-transparent focus:text-primary  ${
              formData?.email ? "focus:border-primary" : ""
            }`}
        />
        {errors?.email && (
          <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
            <MdErrorOutline /> {errors?.email}
          </p>
        )}
      </MotionDiv>
      <MotionDiv
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="mb-4 w-full md:w-[60%]"
      >
        <textarea
          id="message"
          name="message"
          value={formData?.message}
          placeholder="Enter your message."
          onChange={handleChange}
          rows={4}
          autoComplete="off"
          className={`mb-2 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 focus:outline-none placeholder:text-neutral-400 
            focus:bg-transparent focus:text-primary  ${
              formData?.message ? "focus:border-primary" : ""
            }`}
        />
        {errors?.message && (
          <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
            <MdErrorOutline />
            {errors?.message}
          </p>
        )}
      </MotionDiv>
      <button
        type="submit"
        disabled={isSending}
        className={`w-full md:w-[60%] text-sm lg:text-xl py-2 px-4 lg:px-6 lg:py-2 
          rounded uppercase font-semibold flex items-center gap-2 justify-center
          shadow-inner shadow-primary text-primary 
          transition-all duration-300 ease-in-out tracking-wider
          hover:text-white hover:bg-primary
          ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
      >
        {isSending ? "Sending..." : "Send"}
        <IoSend />
      </button>
    </form>
  );
};

export default ContactFormInteraction;

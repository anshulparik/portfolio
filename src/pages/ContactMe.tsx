"use client";
import toast, { Toaster } from "react-hot-toast";
import { MdErrorOutline } from "react-icons/md";
import React, { ChangeEvent, useState } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";
import { ContactFormError, ContactForm } from "@/utils/type";


const ContactMe = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<ContactFormError>({});
  const [isSending, setIsSending] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <section id="contact" className="p-4 mb-14 lg:mb-40">
      <Toaster />
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Contact <span className="text-purple-800">Me</span>
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="mb-4 w-full md:w-[60%]">
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
            focus:bg-transparent focus:text-purple-800  ${
              formData?.name ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.name && (
            <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
              <MdErrorOutline />
              {errors?.name}
            </p>
          )}
        </div>
        <div className="mb-4 w-full md:w-[60%]">
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
            focus:bg-transparent focus:text-purple-800  ${
              formData?.email ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.email && (
            <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
              <MdErrorOutline /> {errors?.email}
            </p>
          )}
        </div>
        <div className="mb-4 w-full md:w-[60%]">
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
            focus:bg-transparent focus:text-purple-800  ${
              formData?.message ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.message && (
            <p className="text-sm mb-2 text-red-600 flex items-center gap-2">
              <MdErrorOutline />
              {errors?.message}
            </p>
          )}
        </div>
        <button
          type="submit"
          disabled={isSending}
          className={`w-full md:w-[60%] text-sm lg:text-xl py-2 px-4 lg:px-6 lg:py-2 
          rounded bg-purple-800 uppercase 
          font-semibold tracking-wider text-white border-2 border-transparent 
          transition-all duration-300 ease-in-out 
        hover:bg-black hover:border-purple-800 hover:text-purple-800
          ${isSending ? "cursor-not-allowed opacity-50" : ""}`}
        >
          {isSending ? "Sending..." : "Send"}
        </button>
      </form>
    </section>
  );
};

export default ContactMe;

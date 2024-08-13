"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e?.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let errors: any = {};
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

  const handleSubmit = (e: any) => {
    e?.preventDefault();
    const validationErrors = validate();
    if (Object?.keys(validationErrors)?.length > 0) {
      setErrors(validationErrors);
    } else {
      // setErrors({});
      setIsSending(true);
      emailjs
        ?.send(
          "service_3t4wlfk",
          "template_6zqvuvf",
          formData,
          "nJMkzQeGzH31siy7O"
        )
        .then((response) => {
          console.log("SUCCESS!", response?.status, response?.text);
          toast.success("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        })
        .catch((error) => {
          console.log("FAILED!", error);
          toast?.error("Oops! Something went wrong. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };

  return (
    <section className="p-4 mb-14 lg:mb-40">
      <Toaster />
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Contact Me
      </h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center"
      >
        <div className="mb-4 lg:w-[60%]">
          <input
            type="text"
            id="name"
            name="name"
            value={formData?.name}
            placeholder="Enter your name."
            onChange={handleChange}
            autoComplete="off"
            className={`mb-8 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 text-sm focus:outline-none placeholder:text-xl placeholder:text-neutral-400 
            focus:bg-transparent focus:text-xl focus:text-purple-800  ${
              formData?.name ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.name && (
            <p className="text-sm mb-2 text-pink-700">{errors?.name}</p>
          )}
        </div>
        <div className="mb-4 lg:w-[60%]">
          <input
            type="email"
            id="email"
            name="email"
            value={formData?.email}
            placeholder="Enter your email address."
            onChange={handleChange}
            autoComplete="off"
            className={`mb-8 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 text-sm focus:outline-none placeholder:text-xl placeholder:text-neutral-400 
            focus:bg-transparent focus:text-xl focus:text-purple-800  ${
              formData?.email ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.email && (
            <p className="text-sm mb-2 text-pink-700">{errors?.email}</p>
          )}
        </div>
        <div className="lg:w-[60%]">
          <textarea
            id="message"
            name="message"
            value={formData?.message}
            placeholder="Enter your message for me."
            onChange={handleChange}
            autoComplete="off"
            rows={4}
            className={`mb-8 w-full appearance-none border-0 border-b-2 bg-transparent
            py-2 text-sm focus:outline-none placeholder:text-xl placeholder:text-neutral-400 
            focus:bg-transparent focus:text-xl focus:text-purple-800  ${
              formData?.message ? "focus:border-purple-800" : ""
            }`}
          />
          {errors?.message && (
            <p className="text-sm mb-2 text-pink-700">{errors?.message}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default ContactMe;

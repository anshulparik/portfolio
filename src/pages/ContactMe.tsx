import { Toaster } from "react-hot-toast";
import React from "react";
import ContactFormInteraction from "@/components/ContactFormInteraction";

const ContactMe = () => {
  return (
    <section id="contact" className="p-4 mb-14 lg:mb-40">
      <Toaster />
      <h1 className="text-4xl font-bold text-center py-4 mb-2 lg:mb-6">
        Contact <span className="text-purple-800">Me</span>
      </h1>
      <ContactFormInteraction />
    </section>
  );
};

export default ContactMe;

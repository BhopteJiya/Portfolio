import React from "react";
import ContactForm from "../AdditionalComponent/ContactForm";

const Contact = () => {
  return (
    <section
      id="Contact"
      className="min-h-screen flex flex-col items-center 
                 justify-center px-6 py-20 cursor-pointer"
    >
      <h2 className="text-4xl font-bold text-white mb-10">
        Contact Me
      </h2>

      <ContactForm />
    </section>
  );
};

export default Contact;

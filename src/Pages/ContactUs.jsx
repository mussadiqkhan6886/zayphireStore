import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

   const form = useRef();

  const serviceKey = "service_c8z7cbg"
  const templateKey = "template_37yxp52"
  const publicKey  = "PneOTVPQaXcM4CPRd"

  const [status, setStatus] = useState("")

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending")
    emailjs
      .sendForm(serviceKey, templateKey, form.current, publicKey)
      .then(
        () => {
          setStatus("Message sent")
          console.log('SUCCESS!');
        },
        (error) => {
          setStatus("Message Failed")
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
   <main className="pt-30 lg:pt-20 px-4 mb-5 max-w-xl mx-auto">
  <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

  <form
    ref={form}
    onSubmit={sendEmail}
    className="bg-white shadow-md rounded-lg p-6 space-y-4"
  >
    <div>
      <label className="block text-gray-700 font-medium mb-1">Name</label>
      <input
        autoComplete="off"
        type="text"
        name="user_name"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Email</label>
      <input
        autoComplete="off"
        type="email"
        name="user_email"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <div>
      <label className="block text-gray-700 font-medium mb-1">Message</label>
      <textarea
        name="message"
        rows="5"
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
    </div>

    <input
      autoComplete="off"
      type="submit"
      value="Send"
      className="w-full bg-amber-600 text-white cursor-pointer font-semibold py-2 rounded-md hover:bg-amber-700 transition"
    />
    {status}
  </form>
</main>
  )
}

export default ContactUs

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { VscCallOutgoing } from "react-icons/vsc";
import { MdOutlineMailOutline } from "react-icons/md";
import SectionTitle from "../SectionTitle";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${import.meta.env.VITE_APP_SERVICE_ID}`,
        `${import.meta.env.VITE_APP_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_APP_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: `An error occurred. ${error.text}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="my-12 md:px-8 py-20 bg-sky-100 rounded-lg shadow-md"
    >
      <SectionTitle
        title={"Contact Me"}
        intro={"Feel free to contact me for any feedback or hire me!"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 mx-auto w-full px-5 md:px-10"
        >
          <div>
            <label className="block text-lg font-semibold mb-2 uppercase">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 uppercase">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-semibold mb-2 uppercase">
              Message
            </label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="text-end">
            <button
              type="submit"
              className="btn btn-outline hover:text-blue-400 uppercase"
            >
              Send <IoIosSend className="text-xl" />
            </button>
          </div>
        </form>
        <div className="md:border-l-2 space-y-10 px-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap10 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase">Address</h4>
            <a
              href="https://maps.app.goo.gl/7tVD44WgR25PHiHf7"
              target="_blank"
              className="flex items-center gap-3"
            >
              <FaLocationDot className="text-2xl" />
              <address>
                Resiinankatu 1 <br /> 33560, Tampere, Finland
              </address>
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap10 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase md:text-end">Phone</h4>
            <a href="tel:+358465896030" className="flex items-center gap-3">
              {" "}
              <VscCallOutgoing className="text-2xl" /> +358465896030
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap10 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase md:text-end">Email</h4>
            <a
              href="mailto:maas.sajal@gmail.com"
              className="flex items-center gap-3"
            >
              <MdOutlineMailOutline className="text-2xl" /> maas.sajal@gmail.com
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap10">
            <h4 className="font-bold text-2xl uppercase md:text-end">Social</h4>
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/maa-sajal"
                className="text-blue-700 text-2xl border-2 rounded-full p-3"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/maasajal"
                className="text-gray-700 text-2xl border-2 rounded-full p-3"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.facebook.com/maa.sajal"
                className="text-blue-600 text-2xl border-2 rounded-full p-3"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
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
        `service_3r145p1`,
        `template_n1rh3zt`,
        form.current,
        `PJbN8hDkdaUCeg5ek`
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error occurred, please try again.");
        }
      );

    // e.target.reset();
  };

  return (
    <div
      id="contact"
      className="my-12 px-8 py-20 bg-sky-100 rounded-lg shadow-md"
    >
      <SectionTitle
        title={"Contact Me"}
        intro={"Feel free to contact me for any feedback or hire me!"}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="space-y-4 mx-auto w-full px-10"
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
        <div className="border-l-2 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase text-end">Address</h4>
            <a
              href="https://maps.app.goo.gl/7tVD44WgR25PHiHf7"
              target="_blank"
              className=" flex items-center gap-3"
            >
              <FaLocationDot className="text-2xl" />
              <address>
                Resiinankatu 1 <br /> 33560, Tampere, Finland
              </address>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase text-end">Phone</h4>
            <a href="tel:+358465896030" className=" flex items-center gap-3">
              {" "}
              <VscCallOutgoing className="text-2xl" /> +358465896030
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20 border-b-2 pb-10">
            <h4 className="font-bold text-2xl uppercase text-end">Email</h4>
            <a
              href="mailto:maas.sajal@gmail.com"
              className=" flex items-center gap-3"
            >
              <MdOutlineMailOutline className="text-2xl" /> maas.sajal@gmail.com
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-20">
            <h4 className="font-bold text-2xl uppercase text-end">Social</h4>
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
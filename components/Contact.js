import React, { useState } from "react";
import { contacttData } from "../data/data";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      const { data } = await axios.post(
         `${process.env.BASE_URL}/api/contact`,
        {
          name,
          email,
          message,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading(false);
      toast.success(data.mess);
    } catch (error) {
      setLoading(false);
      toast.error(error.response.data.mess);
    }
  };

  return (
    <section id="contact">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 1 },
        }}
        className="text-center mb-20 space-y-3"
      >
        <p className="text-gray-400 font-Popins text-sm sm:text-base">
          Get In Touch
        </p>
        <h1 className="text-gray-200 text-3xl font-Josefin">Contact Me</h1>
      </motion.div>
      <main className="text-[#B8C6DB] grid grid-cols-2 md:grid-cols-5 p-4 lg:p-10 max-w-6xl mx-auto gap-y-10 sm:gap-y-0 gap-x-6 lg:gap-x-0">
        {/* Left */}
        <motion.div
          whileInView={{
            x: [-200, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="col-span-2 space-y-8 lg:w-[20rem]"
        >
          {contacttData.map((item, index) => {
            return (
              <motion.div
                key={index}
                whileInView={{
                  opacity: [0, 1],
                }}
                className="bg-gradient-to-br scaleAnim font-Josefin rounded-2xl space-y-2 p-10 from-[#09203F] to-[#537895]"
              >
                <span>{item.icon}</span>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p>{item.name}</p>
                <a
                  rel="noreferrer"
                  className="text-[#5DE6DE] text-sm"
                  target="_blank"
                  href={item.link}
                >
                  Send a Message
                </a>
              </motion.div>
            );
          })}
        </motion.div>
        {/* Right */}
        <motion.div
          whileInView={{
            x: [200, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="col-span-3 bg-gradient-to-bl rounded-2xl p-4 from-[#09203F] font-Josefin to-[#537895]"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-8 flex flex-col my-4"
          >
            <input
              type="text"
              className="conInp "
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name.."
            />
            <input
              type="email"
              className="conInp"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email.."
            />

            <textarea
              type="text"
              className="conInp h-[15rem]"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your Message.."
            />
            <button
              disabled={loading}
              type="submit"
              className="border bg-[#263850] disabled:cursor-not-allowed w-fit py-2 px-6 hover:bg-[#09203F] scaleAnim duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>
      </main>
    </section>
  );
};

export default Contact;

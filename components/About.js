import React from "react";
import { aboutData } from "../data/data";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-6xl mx-auto  text-white capitalize font-Mulish"
    >
      <motion.div
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 1 },
        }}
        className="text-center mb-20 space-y-3"
      >
        <p className="text-gray-400 font-Popins text-sm sm:text-base">
          Get To Know
        </p>
        <h1 className="text-gray-200 text-3xl font-Josefin">About Me</h1>
      </motion.div>
      <div className="flex flex-col lg:flex-row sm:justify-around items-center ">
        {/* Left */}
        <motion.div
          whileInView={{
            x: [-200, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="w-[20rem] shadow-[2px_1px_15px_1px_#A4508B] h-[20rem] mx-auto lg:mx-0 mb-20 lg:mb-0 rounded-[2rem] bg-gradient-to-br from-[#7EE8FA] to-[#380036]"
        >
          <img
            className="w-full h-full object-cover rounded-[2rem] rotate-[10deg] hover:rotate-[0deg] duration-300 scaleAnim"
            src="images/2.jpg"
            alt="profile"
          />
        </motion.div>
        {/* Right */}
        <motion.div
          whileInView={{
            x: [200, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="space-y-6 px-10"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:space-x-8 ">
            {aboutData.map((item, index) => {
              return (
                <div key={index} className="aboutDiv">
                  <p className="text-sm">{item.icon}</p>
                  <h2 className="font-Josefin text-lg">{item.title}</h2>
                  <p className="font-mono text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="flex space-y-8 flex-col justify-center items-center lg:items-start">
            <p className="text-xs text-center md:text-left lg:w-[30rem] leading-[1.8rem]  tracking-wider sm:tracking-wide font-Popins ">
              I have been developing web apps for more than 2 years. Nowadays, I
              use React.Js as Next.Js, Scss, Bootstrap, TailwindCss,
              Material-Ui, Redux, Redux-Toolkit for Frontend and NodeJs,
              ExpressJs, MongoDb, Firebase for backend. I believe in pixel
              perfect design. I assure you that I will provide clean code with
              even better performance. You must be satisfied with my work.
            </p>
            <Link
              className="leftBtn rounded-xl"
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Let's Talk
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

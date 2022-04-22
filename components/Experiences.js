import React from "react";
import { experiencesData } from "../data/data";
import { BsChevronDoubleRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <section
      id="experience"
      className="max-w-6xl mx-auto text-white capitalize font-Mulish"
    >
      <motion.div
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 1 },
        }}
        className="text-center mb-20 space-y-3"
      >
        <p className="text-gray-400 font-Popins text-sm sm:text-base">
          Skill's That I Have
        </p>
        <h1 className="text-gray-200 text-3xl font-Josefin">Experiences</h1>
      </motion.div>
      <motion.div
        whileInView={{
          y: [150, 0],
          opacity: [0, 1],
          transition: { duration: 0, when: "beforeChildren" },
        }}
        className="grid sm:grid-cols-2 gap-x-4 lg:gap-x-20 p-4 lg:p-10 space-y-8 sm:space-y-0"
      >
        {/* Left */}
        <div className="bg-gradient-to-br scaleAnim hover:bg-gradient-to-tl from-[#0D324D] to-[#6B0F1A] rounded-2xl p-5">
          <h4 className="my-10 text-center">Frontend Developement</h4>
          <div className="grid grid-cols-2 place-items-center">
            {experiencesData.frontend.map((item, index) => {
              return (
                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    transition: {
                      delay: 0.3,
                    },
                  }}
                  key={index}
                  className="flex items-center space-x-4 mb-10"
                >
                  <BsChevronDoubleRight
                    className="bg-green-600 rounded-sm w-5 h-5 p-[.1rem] text-white"
                    size={15}
                  />
                  <div className="w-[8em]">
                    <h3 className="font-Josefin">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.skill}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
        {/* Right */}
        <div className="bg-gradient-to-br hover:bg-gradient-to-tl scaleAnim from-[#0D324D] to-[#6B0F1A] rounded-2xl p-5">
          <h4 className="my-10 text-center">Backend Developement</h4>
          <div className="grid grid-cols-2 place-items-center">
            {experiencesData.backend.map((item, index) => {
              return (
                <motion.div
                  whileInView={{
                    opacity: [0, 1],
                    transition: {
                      delay: 0.3,
                    },
                  }}
                  key={index}
                  className="flex items-center space-x-4 mb-10"
                >
                  <BsChevronDoubleRight
                    className="bg-green-600 rounded-sm w-5 h-5 p-[.1rem] text-white"
                    size={15}
                  />
                  <div className="w-[8em]">
                    <h3 className="font-Josefin">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.skill}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experiences;

import { motion } from "framer-motion";
import React from "react";
import { FiChevronsRight } from "react-icons/fi";

const ServiceBody = ({ title, data }) => {
  return (
    <div className="md:w-[27rem] h-fit text-white mb-10 space-y-6 bg-gradient-to-t scaleAnim hover:bg-gradient-to-b px-4 py-10 md:p-10 rounded-xl md:mr-8 from-[#5F0A87] to-[#A4508B] hover:from-[#5F0A87]">
      <div className="font-AnekOdia tracking-wider text-xl text-center">
        <h1>{title}</h1>
        <hr className="w-14 mx-auto mt-2" />
      </div>
      <div>
        {data.map((item, index) => {
          return (
            <motion.div
              key={index}
              whileInView={{
                opacity: [0, 1],
                transition: { delay: 0.4 },
              }}
              className="flex items-center tracking-wide font-Josefin space-x-3 mb-5 md:mb-8 last:mb-2"
            >
              <FiChevronsRight size={20} className="bg-sky-500 rounded-sm" />
              <h2 className="text-sm lg:text-base text-gray-300">
                {item.desc}
              </h2>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ServiceBody;

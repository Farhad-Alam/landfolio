import React from "react";
import { servicesData } from "../data/data";
import ServiceBody from "./ServiceBody";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="max-w-[95rem] mx-auto">
      <div className="text-center mb-20 space-y-3 ">
        <p className="text-gray-400 font-Popins text-sm sm:text-base">
          What I Offer
        </p>
        <h1 className="text-gray-200 text-3xl font-Josefin">Services</h1>
      </div>
      <div className="flex flex-wrap justify-center p-4 items-center">
        <div>
          <motion.div
            whileInView={{
              x: [0, -120, 0],
              opacity: [0, 1],
              transition: { duration: 1 },
            }}
            className=""
          >
            <ServiceBody title={"UI/UX Design"} data={servicesData.uiDesign} />
          </motion.div>
        </div>

        <motion.div
          whileInView={{
            y: [120, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
        >
          <ServiceBody
            title={"Web Developement"}
            data={servicesData.webDevelopement}
          />
        </motion.div>

        <motion.div
          whileInView={{
            x: [0, 120, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
        >
          <ServiceBody
            title={"Content Design"}
            data={servicesData.contentDesign}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

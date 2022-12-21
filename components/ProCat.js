import React from "react";
import { motion } from "framer-motion";

const ProCat = ({ setCategory }) => {
  return (
    <motion.div
      whileInView={{
        x: [100, 0],
        opacity: [0, 1],
        transition: { duration: 1 },
      }}
      className="text-white font-Josefin sm:space-x-4 border-2 grid sm:block grid-cols-2 gap-4 border-[#6B0F1A] w-fit px-10 py-4 rounded-xl mx-auto mb-5 sm:mb-8"
    >
      <button
        onClick={(e) => setCategory("")}
        className="bg-gradient-to-tr from-[#380036] to-[#0CBABA]  px-5 sm:px-8  py-3 rounded-lg scaleAnim"
      >
        All
      </button>
      <button
        onClick={(e) => setCategory("Portfolio")}
        className="bg-gradient-to-tr from-[#380036] to-[#0CBABA]  px-5 sm:px-8  py-3 rounded-lg scaleAnim"
      >
        Portfolio
      </button>
      <button
        onClick={(e) => setCategory("Ecommerce")}
        className="bg-gradient-to-tr from-[#380036] to-[#0CBABA]  px-5 sm:px-8  py-3 rounded-lg scaleAnim"
      >
        Ecommerce
      </button>
      <button
        onClick={(e) => setCategory("Social App")}
        className="bg-gradient-to-tr from-[#380036] to-[#0CBABA]  px-5 sm:px-8  py-3 rounded-lg scaleAnim"
      >
        Social App
      </button>
      <button
        onClick={(e) => setCategory("Others")}
        className="bg-gradient-to-tr from-[#380036] to-[#0CBABA]  px-5 sm:px-8  py-3 rounded-lg scaleAnim"
      >
        Others
      </button>
    </motion.div>
  );
};

export default ProCat;

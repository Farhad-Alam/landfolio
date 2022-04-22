import React from "react";
import { motion } from "framer-motion";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Image from "next/image";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <motion.div
        whileInView={{
          opacity: [0, 1],
          transition: { duration: 1 },
        }}
        className="text-center mb-20 space-y-3"
      >
        <p className="text-gray-400 font-Popins text-sm sm:text-base">
          Review From Clients
        </p>
        <h1 className="text-gray-200 text-3xl font-Josefin">Testimonials</h1>
      </motion.div>

      <motion.div
        whileInView={{
          scale: [0.8, 1],
          transition: { duration: 0.5 },
        }}
      >
        <main className="w-[94%] md:max-w-3xl mx-auto bg-gradient-to-tl rounded-xl from-[#647DEE] to-[#7F53AC]">
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              gap: "2rem",
              arrows: false,
              pagination: true,
              drag: "free",
              interval: 3000,
            }}
          >
            {[0, 1, 2, 3].map((item, index) => (
              <SplideSlide
                key={index}
                className="p-10 md:p-20 space-y-4 text-gray-200 font-Mulish tracking-wider flex flex-col justify-center items-center h-full"
              >
                <div className="border-2 scaleAnim shadow-2xl shadow-[#0652C5] rounded-full p-1 flex items-center justify-center border-[#42378F]">
                  <Image
                    layout="fixed"
                    width={70}
                    height={70}
                    src="/images/portfolio1.jpg"
                    className="rounded-full"
                    alt="Image 1"
                  />
                </div>
                <h4 className="font-semibold font-Josefin text-xl">Farhad</h4>
                <p className="text-xs sm:text-sm leading-8 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Magni ab qui, esse assumenda iste labore. Lorem ipsum dolor
                  sit amet, consedipisicing elit. Magni ab qui, esse assumenda
                  iste labore.
                </p>
              </SplideSlide>
            ))}
          </Splide>
        </main>
      </motion.div>
    </section>
  );
};

export default Testimonials;

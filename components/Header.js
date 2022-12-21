import React from "react";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { BsFacebook } from "react-icons/bs";
import { ImLinkedin } from "react-icons/im";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <header
      id="home"
      className="h-screen relative flex flex-col space-y-8 md:space-y-10 justify-center items-center"
    >
      {/* Top */}
      <div>
        <div className="text-white space-y-4 text-sm md:text-base">
          <motion.h4
            whileInView={{
              x: [100, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            className="font-Popins text-gray-200 tracking-wider"
          >
            Hello I'm
          </motion.h4>
          <motion.h1
            whileInView={{
              x: [-100, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            className="font-Josefin text-2xl sm:text-3xl text-center"
          >
            Farhad Hossain
          </motion.h1>
          <motion.p
            whileInView={{
              x: [100, 0],
              opacity: [0, 1],
              transition: { duration: 0.5 },
            }}
            className="text-gray-200 text-xs font-Popins md:text-sm tracking-wider text-right"
          >
            Fullstack Developer
          </motion.p>
        </div>
        <div className="text-white font-Popins mt-8">
          <button className="leftBtn">Hire Me</button>

          <ScrollLink
            className="rightBtn"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            Let's Talk
          </ScrollLink>
        </div>
      </div>
      {/* Bottom */}
      <motion.div
        whileInView={{
          scale: [0.8, 1],
          opacity: [0, 1],
          transition: { duration: 0.8 },
        }}
        className="cssGlass rounded-tl-full rounded-tr-full py-5 px-2"
      >
        <motion.img
          whileInView={{
            y: [150, 0],
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="w-[15rem] md:w-[18rem]"
          src="images/3.png"
          alt=""
        />
      </motion.div>
      {/* Links */}
      <div className="space-y-8 hidden md:block absolute bottom-14 left-10">
        <div>
          <Link href="/">
            <a>
              <BsFacebook size={22} className="text-[#380036] scaleAnim" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <AiFillInstagram size={22} className="text-[#380036] scaleAnim" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <AiFillTwitterCircle
                size={22}
                className="text-[#380036] scaleAnim"
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <ImLinkedin
                size={22}
                className="text-[#380036] scaleAnim rounded-full"
              />
            </a>
          </Link>
        </div>
      </div>
      {/* Links */}
      <div className="space-y-8 hidden md:block absolute top-10 right-10">
        <div>
          <Link href="/">
            <a>
              <BsFacebook size={22} className="text-[#380036] scaleAnim" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <AiFillInstagram size={22} className="text-[#380036] scaleAnim" />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <AiFillTwitterCircle
                size={22}
                className="text-[#380036] scaleAnim"
              />
            </a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>
              <ImLinkedin
                size={22}
                className="text-[#380036] scaleAnim rounded-full"
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

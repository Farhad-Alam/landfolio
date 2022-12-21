import React from "react";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#7EE8FA] to-[#EEC0C6] text-[#380036]">
      <div className="grid  sm:grid-cols-5 space-y-10 sm:space-y-0 sm:place-items-center max-w-7xl mx-auto px-8 py-20 border-b-2 ">
        {/* Left */}
        <div className="space-y-4 col-span-2">
          <h2 className="text-3xl font-Josefin">Farhad Hossain</h2>
          <div className="text-sm font-Popins tracking-wider ">
            <h2 className="text-sm mb-4">In this Project,</h2>
            <div className="space-y-3 text-xs">
              <p>
                I have used <b>React</b>, <b>Next.js</b>,<b>TailwindCSS</b> etc for{" "}
                <b>FRONTEND</b>..
              </p>
              <p>
                I have used <b>Next.Js Server</b> , <b>MongoDB</b>,<b>Mongoose</b>,
                <b>Cloudinary</b> etc for <b>ackend</b>..
              </p>
              <p>
                For Animation I use <b>Framer Motion</b>..
              </p>
            </div>
          </div>
        </div>
        {/* Center */}
        <div className="font-AnekOdia tracking-wider col-span-2">
          <ul className="flex space-x-10">
            <div className="space-y-2 text-sm">
              <li className="scaleAnim">
                <Link href="#">
                  <a>Home</a>
                </Link>
              </li>
              <li className="scaleAnim">
                <Link href="#about">
                  <a>About</a>
                </Link>
              </li>
              <li className="scaleAnim">
                <Link href="#experience">
                  <a>Experiences</a>
                </Link>
              </li>
              <li className="scaleAnim">
                <Link href="#services">
                  <a>Services</a>
                </Link>
              </li>
            </div>
            <div className="space-y-2 text-sm">
              <li className="scaleAnim">
                <Link href="#projects">
                  <a>Projects</a>
                </Link>
              </li>
              <li className="scaleAnim">
                <Link href="#testimonials">
                  <a>Testimonials</a>
                </Link>
              </li>
              <li className="scaleAnim">
                <Link href="#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </div>
          </ul>
        </div>
        {/* Right */}
        <div>
          <ul className=" flex space-x-4">
            <li className="scaleAnim">
              <FaFacebook size={20} />
            </li>
            <li className="scaleAnim">
              <RiInstagramFill size={20} />
            </li>
            <li className="scaleAnim">
              <AiOutlineTwitter size={20} />
            </li>
            <li className="scaleAnim">
              <AiFillLinkedin size={20} />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-sm font-Popins tracking-wide text-center px-1 py-5">
        {`© ${new Date().getFullYear()} All Rights Reserved By `}
        <span className="text-lg font-Josefin text-[#FF4E00] ">
          Farhad Hossain
        </span>
      </p>
    </footer>
  );
};

export default Footer;

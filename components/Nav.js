import Link from "next/link";
import React, { useState } from "react";
import { BiHome } from "react-icons/bi";
import { FiBookOpen, FiLifeBuoy } from "react-icons/fi";
import { VscProject } from "react-icons/vsc";
import { IoSchoolSharp } from "react-icons/io5";
import { MdOutlineMiscellaneousServices } from "react-icons/md";

const Nav = () => {
  const [active, setActive] = useState("#");

  return (
    <div className="fixed flex items-center cssGlassNav px-6 md:px-10 rounded-full py-[.4rem] md:py-[.6rem] bottom-6 md:bottom-12 left-[50%] translate-x-[-50%] space-x-6 z-10">
      <div
        className={active === "#" ? "navDiv" : null}
        onClick={() => setActive("#")}
      >
        <Link href="#">
          <a>
            <BiHome size={32} className="navBtn" />
          </a>
        </Link>
      </div>
      <div
        className={active === "#about" ? "navDiv" : null}
        onClick={() => setActive("#about")}
      >
        <Link href="#about">
          <a>
            <FiBookOpen size={32} className="navBtn" />
          </a>
        </Link>
      </div>
      <div
        className={active === "#services" ? "navDiv" : null}
        onClick={() => setActive("#services")}
      >
        <Link href="#services">
          <a>
            <IoSchoolSharp size={32} className="navBtn" />
          </a>
        </Link>
      </div>
      <div
        className={active === "#projects" ? "navDiv" : null}
        onClick={() => setActive("#projects")}
      >
        <Link href="#projects">
          <a>
            <MdOutlineMiscellaneousServices size={32} className="navBtn" />
          </a>
        </Link>
      </div>
      <div
        className={active === "#contact" ? "navDiv" : null}
        onClick={() => setActive("#contact")}
      >
        <Link href="#contact">
          <a>
            <VscProject size={32} className="navBtn" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;

import { Link } from "react-scroll";
import React from "react";
import { navData } from "../data/data";

const Nav = () => {
  return (
    <div className="fixed flex items-center cssGlassNav px-6 md:px-10 rounded-full py-[.4rem] md:py-[.6rem] bottom-6 md:bottom-12 left-[50%] translate-x-[-50%] space-x-6 z-10">
      {navData.map((item, index) => (
        <Link
          key={index}
          activeClass="navDiv"
          className="navBtn scaleAnim"
          to={item.title}
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Nav;

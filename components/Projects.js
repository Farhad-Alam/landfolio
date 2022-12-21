import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import ProjectModal from "./ProjectModal";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import { Pagination } from "@mui/material";
import ProCat from "./ProCat";
import { showState } from "../atoms/showAtom";
import { useRecoilState } from "recoil";
import ProInfoModal from "./ProInfoModal";
import { AiOutlinePlus } from "react-icons/ai";
import { modalState } from "../atoms/modalAtom";
import Loader from "./Loader";

const Projects = ({ token }) => {
  const [projects, setProjects] = useState([]);
  const [category, setCategory] = useState("");
  const [show, setShow] = useRecoilState(showState);
  const [open, setOpen] = useRecoilState(modalState);
  const [id, setId] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const handleOpen = (value) => {
    setShow(true);
    setId(value);
  };

  const handleShow = () => setOpen(true);

  const unsub = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `${process.env.BASE_URL}/api/user/me?page=${page}&category=${category}`
      );
      setProjects(data.project);
      setTotalPage(data.productsCount);
      setResultPerPage(data.resultPerPage);
      setLoading(false);
    } catch (error) {
      setLoading(false);

      console.log(error);
    }
  };

  useEffect(() => {
    unsub();
  }, [category, page]);

  return (
    <section id="projects" className="max-w-6xl mx-auto relative">
      <div>
        <motion.div
          whileInView={{
            opacity: [0, 1],
            transition: { duration: 1 },
          }}
          className="text-center mb-20 space-y-3 "
        >
          <p className="text-gray-400 font-Popins text-sm sm:text-base">
            My Recent Works
          </p>
          <h1 className="text-gray-200 text-3xl font-Josefin">Projects</h1>
        </motion.div>
        {/* Project Modal */}
        {token.token && (
          <button
            className="absolute top-[6em] left-[50%] translate-x-[-50%]"
            onClick={handleShow}
          >
            <AiOutlinePlus
              size={35}
              className="p-1 rounded-lg bg-[#FC575E] scaleAnim text-white border border-[#FC575E]"
            />
          </button>
        )}
        {/* Project Categories */}
        <ProCat setCategory={setCategory} />

        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-white p-6">
            {projects.map((item, index) => {
              return (
                <motion.div
                  key={index}
                  whileInView={{
                    y: [50, 0],
                    opacity: [0, 1],
                    scale: [0.8, 1],
                    transition: { duration: 1 },
                  }}
                  className="bg-gradient-to-t from-[#5F72BE] to-[#9921E8] p-6 space-y-3 rounded-l-3xl"
                >
                  <div>
                    <Splide
                      options={{
                        type: "loop",
                        autoplay: true,
                        arrows: false,
                        gap: "2rem",
                        pagination: false,
                        drag: "free",
                        interval: 3000,
                      }}
                    >
                      <SplideSlide>
                        <Image
                          layout="responsive"
                          width={300}
                          height={180}
                          objectFit="contain"
                          src={item.images.image1.url}
                          alt=""
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="responsive"
                          width={300}
                          height={180}
                          objectFit="contain"
                          src={item.images.image2.url}
                          alt=""
                        />
                      </SplideSlide>
                      <SplideSlide>
                        <Image
                          layout="responsive"
                          width={300}
                          height={180}
                          objectFit="contain"
                          src={item.images.image3.url}
                          alt=""
                        />
                      </SplideSlide>
                    </Splide>
                  </div>
                  <h2>{item.title}</h2>
                  <div className="space-x-4 font-AnekOdia">
                    <button
                      className="leftBtn rounded-lg"
                      onClick={() => handleOpen(item._id)}
                    >
                      Info
                    </button>
                    <a rel="noreferrer" target="_blank" href={item.url}>
                      <a className="rightBtn rounded-lg">Live Demo</a>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
        <ProjectModal token={token} />
        <ProInfoModal projects={projects} id={id} />
        {/* Pagination */}
        <div className="bg-white w-fit py-2 px-4 rounded-lg mx-auto mt-8">
          <Pagination
            page={page}
            onChange={(event, value) => {
              setPage(value);
            }}
            color="secondary"
            count={2}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;

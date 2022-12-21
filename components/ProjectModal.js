import React, { useRef, useState } from "react";
import { Modal } from "@mui/material";
import { GoDeviceCamera } from "react-icons/go";
import Button from "@mui/material/Button";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";

const ProjectModal = ({ token }) => {
  const [open, setOpen] = useRecoilState(modalState);
  const photoRef1 = useRef();
  const photoRef2 = useRef();
  const photoRef3 = useRef();
  const [skills, setSkills] = useState({});
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [frontend, setFrontend] = useState("");
  const [backend, setBackend] = useState("");
  const [others, setOthers] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClose = () => setOpen(false);

  const handleImage = (e, val) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onload = () => {
      if (reader.readyState === 2) {
        if (val === 1) {
          setSkills({ ...skills, image1: reader.result });
        }
        if (val === 2) {
          setSkills({ ...skills, image2: reader.result });
        }
        if (val === 3) {
          setSkills({ ...skills, image3: reader.result });
        }
      }
    };
  };

  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const { data } = await axios.put(
        `${process.env.BASE_URL}api/admin/update`,
        {
          url,
          title,
          category,
          frontend,
          backend,
          others,
          images: skills,
        }
      );
      setLoading(false);
      console.log(data);
      toast.success(data.mess);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <div className="">
      {/* Modal for Add Projects */}

      
      <Modal
        open={open}
        onClose={handleClose}
        className="flex justify-center items-center p-4"
      >
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-tr from-[#D387AB] to-[#B3CDD1] w-[30rem] p-6 rounded-xl sm:p-10  text-white"
        >
          <div>
            <div className="flex justify-around mb-8">
              {skills.image1 && (
                <img className="w-20 h-20" src={skills.image1} alt="" />
              )}
              {skills.image2 && (
                <img className="w-20 h-20" src={skills.image2} alt="" />
              )}
              {skills.image3 && (
                <img className="w-20 h-20" src={skills.image3} alt="" />
              )}
            </div>

            <div className="flex justify-around mb-10">
              <GoDeviceCamera
                onClick={() => photoRef1.current.click()}
                className="text-[#FF4E00] border p-[5px] rounded-full "
                size={35}
              />
              <GoDeviceCamera
                onClick={() => photoRef2.current.click()}
                className="text-[#FF4E00] border p-[5px] rounded-full "
                size={35}
              />
              <GoDeviceCamera
                onClick={() => photoRef3.current.click()}
                className="text-[#FF4E00] border p-[5px] rounded-full "
                size={35}
              />
            </div>
            <div>
              <input
                ref={photoRef1}
                type="file"
                hidden
                onChange={(e) => handleImage(e, 1)}
              />
              <input
                ref={photoRef2}
                type="file"
                hidden
                onChange={(e) => handleImage(e, 2)}
              />
              <input
                ref={photoRef3}
                type="file"
                hidden
                onChange={(e) => handleImage(e, 3)}
              />
            </div>

            <div className="space-y-4 md:space-y-6 font-Josefin">
              <input
                onChange={(e) => setUrl(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="Enter the URL"
              />
              <input
                onChange={(e) => setTitle(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="Enter the Title"
              />
              <input
                onChange={(e) => setCategory(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="Enter ur Category"
              />
              <input
                onChange={(e) => setFrontend(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="frontend"
              />
              <input
                onChange={(e) => setBackend(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="Backend"
              />
              <input
                onChange={(e) => setOthers(e.target.value)}
                className="conInp py-2 px-4 text-gray-600 placeholder:text-gray-500 text-sm rounded-lg"
                type="text"
                placeholder="Others"
              />
            </div>
            <button
              type="submit"
              className="border-2 scaleAnim py-2 px-4 rounded-lg block mx-auto mt-5 border-[#7F5A83]"
            >
              {loading ? "Loading.." : "Submit"}
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default ProjectModal;

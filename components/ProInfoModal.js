import { Modal } from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { showState } from "../atoms/showAtom";
import { GrTechnology } from "react-icons/gr";

const ProInfoModal = ({ projects, id }) => {
  const [show, setShow] = useRecoilState(showState);
  const handleClose = () => setShow(false);

  const project = projects.find((item) => item._id === id);

  const front = project?.frontend ? project?.frontend.split(" ") : [];

  const back = project?.backend ? project?.backend.split(" ") : [];

  const others = project?.others ? project?.others.split(" ") : [];

  return (
    <div className="">
      <Modal
        className=" font-Josefin flex justify-center items-center"
        open={show}
        onClose={handleClose}
      >
        <div>
          <div className="bg-white sm:w-[30rem] px-6 py-10 sm:p-10  h-auto rounded-lg">
            <h1 className="modalBorder text-base sm:text-lg text-center">
              <GrTechnology
                className="mx-auto mb-2 bg-[#7EE8FA] p-1 rounded-lg"
                size={30}
              />
              Technologies I use for this project !!
            </h1>
            {/* Body Part */}
            <div className="flex justify-between mt-4 sm:mt-8">
              {/* Frontend */}
              <ul className="space-y-2 flex flex-col items-center">
                <h2 className="font-semibold ">Frontend</h2>
                {front.map((item, ind) => (
                  <li key={ind} className="text-xs sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              {/* Backend */}
              <ul className="space-y-2 flex flex-col items-center">
                <h2 className="font-semibold ">Backend</h2>
                {back.map((item, ind) => (
                  <li key={ind} className="text-xs sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
              {/* Others */}
              <ul className="space-y-2 flex flex-col items-center">
                <h2 className="font-semibold ">Others</h2>
                {others.map((item, ind) => (
                  <li key={ind} className="text-xs sm:text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProInfoModal;

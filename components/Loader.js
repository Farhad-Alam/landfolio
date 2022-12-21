import React from "react";
import { Audio } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <Audio height="50" width="50" color="red" ariaLabel="loading" />
    </div>
  );
};

export default Loader;

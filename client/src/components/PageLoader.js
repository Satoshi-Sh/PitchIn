import React from "react";
import loadingImg from "../assets/images/loader.svg";

const PageLoader = () => {
  return (
    <div className="loader pt-32">
      <img className="w-16 h-16 mx-auto" src={loadingImg} alt="Loading..." />
    </div>
  );
};

export default PageLoader;

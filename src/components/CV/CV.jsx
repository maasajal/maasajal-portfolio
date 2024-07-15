import React from "react";
import { FaDownload } from "react-icons/fa";

const CV = () => {
  // Direct download link
  const cvLink =
    "https://drive.google.com/uc?export=download&id=1n4bvgE1XiP8cJeBSl4H5SUMwvJU6uPsX";
  return (
    <div>
      <a href={cvLink} className="btn btn-outline text-white hover:text-blue-400 hidden sm:flex" download>
        <FaDownload /> CV
      </a>
    </div>
  );
};

export default CV;

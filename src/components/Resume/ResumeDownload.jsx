import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  // Direct download link
  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1tMG2H7UsHtY3ntWgi2RhGtjC78FyKL6s";

  return (
    <div>
      <a
        href={resumeLink}
        className="btn btn-outline hover:text-blue-400"
        download
      >
        <FaDownload /> Resume
      </a>
    </div>
  );
};

export default ResumeDownload;

import React from "react";
import { FaDownload } from "react-icons/fa";

const ResumeDownload = () => {
  // Direct link
  const resumeLink =
    "https://drive.google.com/file/d/1qSM6PDkvsiDNi1AAIvKHZdkRe9IbYnIM/view?usp=sharing";

  // Direct download link
  // const resumeLink =
  //   "https://drive.google.com/uc?export=download&id=1tMG2H7UsHtY3ntWgi2RhGtjC78FyKL6s";

  return (
    <div>
      <a
        href={resumeLink}
        className="btn btn-outline hover:text-blue-400"
        // download
        target="_blank"
      >
        <FaDownload /> Resume
      </a>
    </div>
  );
};

export default ResumeDownload;

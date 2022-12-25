import React from "react";
import { FaCommentSlash } from "react-icons/fa";
import { MdOutlineVideocamOff } from "react-icons/md";

import { NextPage } from "next";

interface IProps {
  text: string;
}

const NoResults: NextPage<IProps> = ({ text }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full">
      <p className="text-8xl">
        {text === "No Comments Yet" ? (
          <FaCommentSlash />
        ) : (
          <MdOutlineVideocamOff />
        )}
      </p>
      <p className="">{text}</p>
    </div>
  );
};

export default NoResults;

import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdDownloadForOffline, MdSlowMotionVideo } from "react-icons/md";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

function Cards({ data, reference }) {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileHover={{ scale: 1.2 }}
      className="relative h-48 w-40 bg-indigo-300   p-3 rounded-[30px] overflow-hidden"
    >
      <FaFileDownload />
      <p className="text-xs mt-2">{data.description}</p>
      <div className="footer absolute bottom-8 w-full h-10 left-0    ">
        <div className="flex items-center justify-between px-5 py-2 ">
          <h5>{data.fileSize}</h5>
          <span className="">
            {" "}
            {data.Close ? (
              <MdDownloadForOffline className=" mr-2 " size={18} />
            ) : (
              <IoCloseCircleOutline className=" mr-2 " size={18} />
            )}
          </span>
        </div>
        {data.tag.tagOpen && (
          <div
            className={`tag w-full bottom-10 h-10 ${
              data.tag.tagColor === "blue" ? "bg-blue-400" : "bg-indigo-500"
            } flex items-center justify-center`}
          >
            <h3 className="font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default Cards;

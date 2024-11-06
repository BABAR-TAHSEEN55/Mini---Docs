import React from "react";
import { FaFileDownload } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";

function Cards() {
  return (
    <div className="relative h-48 w-40 bg-zinc-400   p-3 rounded-[30px] overflow-hidden">
      <FaFileDownload />
      <p className="text-xs mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="footer absolute bottom-0 w-full h-10 left-0  p-2 ">
        <div className="flex items-center justify-between">
          <h5>0.5mB</h5>
          <span className="">
            {" "}
            <MdDownloadForOffline className=" mr-2 " size={18} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;

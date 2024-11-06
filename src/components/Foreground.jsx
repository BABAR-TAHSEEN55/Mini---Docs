import React from "react";
import Cards from "../components/Cards";
function Foreground() {
  const data = [
    {
      id: 1,
      description: "Is this the power of a God? ",
      fileSize: "2.5Gb",
      Close: true,
      tag: {
        tagOpen: true,
        tagTitle: "Download Now",
        tagColor: "indigo",
      },
    },
    {
      id: 2,
      description: "Is this the power of a God? ",
      fileSize: "2.5Gb",
      Close: true,
      tag: {
        tagOpen: true,
        tagTitle: "Download Now",
        tagColor: "blue",
      },
    },
    {
      id: 3,
      description: "Is this the power of a God? ",
      fileSize: "2.5Gb",
      Close: true,
      tag: {
        tagOpen: true,
        tagTitle: "Download Now",
        tagColor: "indigo",
      },
    },
  ];
  return (
    <div className="fixed z-[4] top-0 left-0 w-full h-full flex flex-wrap gap-2 ">
      {data.map((item, index) => (
        <Cards data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Foreground;

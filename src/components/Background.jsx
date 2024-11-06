import React from "react";

function Background() {
  return (
    <>
      <div className="w-full h-screen">
        <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[13vw] font-semibold text-zinc-700 leading-loose tracking-relaxed">
          Docs{" "}
        </h1>
        <div className="absolute top-[10%] w-full font-semibold  py-10 text-zinc-400  text-xs flex justify-center">
          Documents
        </div>
      </div>
    </>
  );
}

export default Background;

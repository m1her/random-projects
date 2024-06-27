"use client";
import "./style.css";

export default function Sun({ trigger }) {
  return (
    <div className="relative w-full h-full rounded-full">
      <div
        className={`w-full h-full rounded-full relative
          ${
            !trigger ? "right-0 delay-200" : "-right-full delay-700"
          } transition-all duration-1000
        `}
      >
        <div className="bg-[#75d5e3] h-full w-1/2 rounded-full right-0 absolute z-40"></div>
        <div className="bg-[#8ae5ff] h-full w-1/2 aspect-square rounded-full right-8 absolute z-30"></div>
        <div className="bg-[#acf5fb] h-full w-1/2 aspect-square rounded-full right-16 absolute z-20"></div>
        <div className="bg-[#c3fbf9] h-full w-1/2 aspect-square rounded-full right-24 absolute z-10"></div>
        <div className="bg-[#cdf9ff] h-full w-1/2 aspect-square rounded-full left-0 absolute z-0"></div>
      </div>
      <div
        className={`sun absolute top-[5px] z-50 transition-all duration-700
        ${!trigger ? "right-1 rotate-0" : "-right-[80px] -rotate-180"}
        `}
      >
        {/* <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div>
        <div className="ray"></div> */}
      </div>
    </div>
  );
}

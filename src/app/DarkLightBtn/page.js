"use client";
import { useState } from "react";
import Sun from "./Sun";
import Moon from "./Moon";

export default function DarkLightBtn() {
  const [trigger, setTrigger] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const changeHandler = () => {
    if (!isDisabled) {
      setTrigger((prev) => !prev);
      setIsDisabled(true);
      setTimeout(() => {
        setIsDisabled(false);
      }, 1800);
    }
  };
  return (
    <div
      className={`w-full h-screen flex justify-center items-center
     ${!trigger ? "bg-white" : "bg-zinc-800"} transition-colors duration-1000`}
    >
      <div
        className={`overflow-hidden relative bg-white w-64 h-20 border-[3px] flex items-center justify-between rounded-full
           ${
             trigger ? "border-white" : "border-gray-400"
           } transition-colors duration-1000
          `}
        onClick={changeHandler}
      >
        <div className={`w-full h-full absolute ${trigger ? "z-50" : "z-10"}`}>
          <Moon trigger={trigger} />
        </div>
        <div
          className={`w-full h-full absolute rounded-full ${
            !trigger ? "z-50" : "z-10"
          }`}
        >
          <Sun trigger={trigger} />
        </div>
      </div>
    </div>
  );
}

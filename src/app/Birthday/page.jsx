import React from "react";
import "./style.css";
import bdImage from "../../../public/bdbg3.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const Birthday = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full font-reddit">
      <div className="flex flex-col justify-center items-center bg-transparent relative h-screen">
        <Image
          alt=""
          src={bdImage}
          className="absolute w-full h-full bg-black object-cover -z-10"
        />
        <div className="text-[#595082] flex flex-col justify-center shadow-[0_0_15px_5px_rgba(207,185,224,0.3)] items-center bg-[#fffbfd] py-16 px-8 rounded-lg ">
          <div className=" font-shadows font-semibold text-[#b6abe9]">
            WE ARE GLAD TO INVITE YOU TO
          </div>
          <div className="font-nanum-brush text-5xl font-bold mt-2 text-[#8b80b9]">
            Emma's birthday party
          </div>
          <div className="text-2xl font-medium font-comfortaa mt-8 mb-1">
            05 June 2023 at 7pm
          </div>
          <div className="font-comfortaa w-full flex justify-center gap-x-2">
            <div className="flex flex-col items-center">
              <div className="p-2 pt-3 w-14 text-2xl font-medium border-2 border-[#b6abe9] rounded aspect-square flex justify-center items-center">
                300
              </div>
              <div className="text-[13px] mt-0.5">days</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 pt-3 w-14 text-2xl font-medium border-2 border-[#b6abe9] rounded aspect-square flex justify-center items-center">
                0
              </div>
              <div className="text-[13px] mt-0.5">hours</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 pt-3 w-14 text-2xl font-medium border-2 border-[#b6abe9] rounded aspect-square flex justify-center items-center">
                0
              </div>
              <div className="text-[13px] mt-0.5">minutes</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="p-2 pt-3 w-14 text-2xl font-medium border-2 border-[#b6abe9] rounded aspect-square flex justify-center items-center">
                0
              </div>
              <div className="text-[13px] mt-0.5">seconds</div>
            </div>
          </div>
          <div className="font-shadows text-2xl font-bold mt-8 text-[#d796d7]">
            Don't miss the fun and festivities
          </div>
        </div>
        <div className="flex gap-x-2 absolute top-6 right-6 text-[#7d5f7d]">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <button className="text-sm text-[#625691] font-semibold font-comfortaa bg-[#fffbfd] px-4 py-2 rounded shadow-[0_0_15px_5px_rgba(207,185,224,0.3)] absolute bottom-6 left-6">
          Program and Info
        </button>
      </div>
      <div className="flex flex-col justify-center items-center bg-white relative">
        <div className="flex flex-col gap-y-4 px-32 w-full">
          <div className="text-lg font-semibold text-[#8b80b9]">
            Please fill with your details
          </div>
          <input
            className="bg-[#f5f0f2d8] placeholder:text-[#534880] p-4 rounded w-full text-sm "
            placeholder="First Name"
          ></input>
          <input
            className="bg-[#f5f0f2d8] placeholder:text-[#534880] p-4 rounded w-full text-sm"
            placeholder="Last Name"
          ></input>
          <input
            className="bg-[#f5f0f2d8] placeholder:text-[#534880] p-4 rounded w-full text-sm"
            placeholder="Your Email"
          ></input>
          <input
            className="bg-[#f5f0f2d8] placeholder:text-[#534880] p-4 rounded w-full text-sm"
            placeholder="Your Telephone"
          ></input>
          <button className="bg-[#8b80b9] px-8 py-2 mt-4 rounded w-fit self-end text-white shadow-[0_0_7px_1px_rgba(0,0,0,0.2)]">
            Next
          </button>
        </div>
        <div className="flex text-gray-500 justify-between items-center w-full absolute bottom-0 p-6">
          <div className="flex gap-x-1 justify-start items-center">
            <FontAwesomeIcon icon={faCopyright} />
            <div>Imno</div>
          </div>
          <div className="flex gap-x-1 justify-start items-center">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <div>Help</div>
          </div>
        </div>
        <div className="absolute flex justify-center items-center top-6 bg-gray-100 text-gray-500 right-6 rounded-full h-10 aspect-square">
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};

export default Birthday
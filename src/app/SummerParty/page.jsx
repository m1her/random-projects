import React from "react";
import "./style.css";
import bdImage from "../../../public/BeachBg.jpg";
import umbrella from "../../../public/umbrella.png";
import beachball from "../../../public/beachball.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCopyright,
  faQuestionCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const SummerParty = () => {
  return (
    <div className="grid grid-cols-2 w-full h-full font-summer-vibes">
      <div className="flex flex-col items-center bg-transparent relative h-screen">
        <Image
          alt=""
          src={bdImage}
          className="absolute w-full h-full object-cover -z-10"
        />
        <div className=" flex flex-col items-center">
          <div className="font-black text-[#4a9bf7] text-5xl mt-16">
            Sizzling Summer Celebration
          </div>
          <div className="text-4xl font-bold text-[#80b6f5] mt-8">
            Drinks, music, and Good Vibes
          </div>
          <div className="text-2xl font-bold text-[#f0f7ff] mt-8">
            Party You Won't Forget
          </div>
          <div className="bg-white/50 mt-10 rounded-lg p-8">
            <div className="font-edu-tas-beginner text-4xl font-bold text-[#0b66ac] mb-3">
              05 June 2023 at 7pm
            </div>
            <div className="font-edu-tas-beginner w-full flex justify-center gap-x-6 mt-2">
              <div className="text-[#0b66ac] flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold flex justify-center items-center">
                  300
                </div>
                <div className="">days</div>
              </div>
              <div className="text-[#0b66ac] flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold flex justify-center items-center">
                  0
                </div>
                <div className="">hours</div>
              </div>
              <div className="text-[#0b66ac] flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold flex justify-center items-center">
                  0
                </div>
                <div className="">minutes</div>
              </div>
              <div className="text-[#0b66ac] flex flex-col justify-center items-center">
                <div className="text-2xl font-semibold flex justify-center items-center">
                  0
                </div>
                <div className="">seconds</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex text-lg gap-x-2 absolute bottom-8 right-6 text-[#2887ca]">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <button className="font-edu-tas-beginner bg-[#2887ca] text-[#ffff] font-bold px-4 py-2 rounded shadow-[0_0_10px_3px_rgba(40,135,202,0.2)] absolute bottom-6 left-6">
          Program and Info
        </button>
      </div>
      <div className="font-edu-tas-beginner flex flex-col justify-center items-center bg-white relative">
        <div className="flex flex-col gap-y-4 px-32 w-full">
          <div className="relative">
            <Image
              src={umbrella}
              alt=""
              width={150}
              height={150}
              className="w-28 absolute -right-10 -top-2"
            />
            <div className="text-xl font-bold text-[#2887ca]">
              Please fill with your details
            </div>
          </div>
          <input
            className="bg-[#f4f8fb] placeholder:text-[#3a77a3] p-4 rounded w-full "
            placeholder="First Name"
          ></input>
          <input
            className="bg-[#f4f8fb] placeholder:text-[#3a77a3] p-4 rounded w-full"
            placeholder="Last Name"
          ></input>
          <input
            className="bg-[#f4f8fb] placeholder:text-[#3a77a3] p-4 rounded w-full"
            placeholder="Your Email"
          ></input>

     
            <input
              className="bg-[#f4f8fb] placeholder:text-[#3a77a3] p-4 rounded w-full"
              placeholder="Your Telephone"
            ></input>
      
   
          <button className="bg-[#2887ca] font-bold px-8 py-2 mt-4 rounded w-fit self-end text-white shadow-[0_0_10px_3px_rgba(40,135,202,0.2)]">
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
        <div className="absolute flex justify-center items-center top-6 right-6">
          <div className="relative">
            <Image
              src="./seaShell.svg"
              alt=""
              width={150}
              height={150}
              className="w-16 rotate-180"
            />
            <FontAwesomeIcon
              icon={faBars}
              className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-0.5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerParty;

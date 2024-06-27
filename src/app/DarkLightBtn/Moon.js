"use client";
import { Stars } from "./Stars";
import "./style.css";

export default function Moon({ trigger }) {
  return (
    <div className="relative overflow-hidden w-full h-full flex items-center rounded-full">
      <div
        className={`overflow-hidden absolute w-full h-full bg-gradient-to-r to-[#1e2b58] from-[#614cbf] to-50% from-10%
        ${
          trigger ? "left-0 delay-200" : "-left-full delay-1000"
        } transition-all duration-1000 rounded-full
        `}
      >
        <div className="absolute w-[218px] h-[200px] -top-20 left-8 z-10 rounded-full overflow-hidden">
          <Stars />
        </div>
        <div className="absolute w-full h-full top-0 left-0 z-20 rounded-full bg-gradient-to-r from-[#614cbf] from-20% to-40%"></div>
        {/* <div className="absolute w-full h-full top-0 left-0 z-30 rounded-full bg-gradient-to-l from-[#1e2b58] from-1% to-10%"></div> */}
      </div>
      <div
        className={`moon z-40 transition-all duration-700 absolute ${
          trigger ? "left-1 rotate-0" : "-left-[70px] -rotate-90"
        }`}
      >
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
        <div className="hole"></div>
      </div>
    </div>
  );
}

// "use client";
// import { Stars } from "./Stars";
// import "./style.css";

// export default function Moon({ trigger }) {
//   return (
//     <div className="relative overflow-hidden w-full h-full flex items-center rounded-full">
//       <div
//         className={`overflow-hidden absolute w-full h-full bg-black bg-gradient-to-r from-black to-gray-300 from-60%
//         ${trigger ? "left-0 delay-200" : "-left-full delay-700"} transition-all duration-1000 rounded-full
//         `}
//       >
//         <div className="absolute w-[210px] h-[200px] -top-20 left-8 z-10 rounded-full overflow-hidden">
//           <Stars />
//         </div>
//         <div className="absolute w-full h-full top-0 left-0 z-20 rounded-full bg-gradient-to-r from-black from-20% to-40%"></div>
//         <div className="absolute w-full h-full top-0 left-0 z-30 rounded-full bg-gradient-to-l from-gray-300 from-5% to-30%"></div>
//       </div>
//       <div
//         className={`moon z-40 transition-all duration-700 absolute ${
//           trigger ? "left-1 rotate-0" : "-left-[70px] -rotate-90"
//         }`}
//       >
//         <div className="hole"></div>
//         <div className="hole"></div>
//         <div className="hole"></div>
//         <div className="hole"></div>
//         <div className="hole"></div>
//         <div className="hole"></div>
//         <div className="hole"></div>
//       </div>
//     </div>
//   );
// }

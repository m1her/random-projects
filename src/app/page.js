"use client";
import { useState } from "react";

export default function Home() {
  const [trigger, setTrigger] = useState(false);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="bg-gray-300 w-64 h-24"></div>
    </div>
  );
}

"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";

const WavyBackgroundDem = () => {
  return (
    <div className="relative h-[40rem] overflow-hidden flex item-center justify-center"> 
        <WavyBackground className="max-w-4xl mx-auto pb-40">
    <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
    Meet Our Instructors
    </p>
    <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
    Discover the talented professionals who will guide your coding journey
    </p>
  </WavyBackground></div>
  );
}

export default WavyBackgroundDem
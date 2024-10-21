"use client";
import React from 'react';
import { Meteors } from '@/components/ui/meteors';

import Image from 'next/image';


const Contact = () => {
  return (
    <div className="min-h-screen bg-[#0a0e27] py-12 pt-36 relative overflow-hidden flex justify-center items-center">
      <Meteors number={30} className="opacity-70" />
      
      
      <div className="flex bg-[#213343] bg-opacity-60 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
        <div className="p-8 transform transition-transform hover:scale-105">
          <h1 className="text-lg md:text-5xl text-center font-sans font-bold mb-8 text-white">
            Contact Us
          </h1>
          <form className="flex flex-col items-center">
            
            <input
              type="text"
              placeholder="Your Name"
              className="mb-4 p-2 rounded-lg w-72 bg-[#0E283F] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="mb-4 p-2 rounded-lg w-72 bg-[#0E283F] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Your Message"
              className="mb-4 p-2 rounded-lg w-72 bg-[#0E283F] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Send Message
            </button>
            
          </form>
        </div>
        <div className="hidden md:flex items-center justify-center w-1/2">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700">
          <Image
            src="/images/pic8.jpeg"
            height="1000"
            width="1000"
            className="h-40 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
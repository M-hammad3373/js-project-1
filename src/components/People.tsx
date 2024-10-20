 'use client'
 import React from 'react'
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/images/pic9.jpeg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:"/images/pic10.jpeg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:"/images/pic11.jpeg",
  },
 
      
];


     function People() {
      return (
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={people} />
        </div>
      );
      
}

export default People
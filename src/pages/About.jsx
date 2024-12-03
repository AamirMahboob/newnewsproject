import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import bgimage from '../assets/bg.png'
const About = () => {
  return (
    <>
      
      <h1 className="px-20 py-2 mt-4 mb-2">About us</h1>
      <div>
        
         <div className="h-72 w-full  flex flex-col gap-4 justify-center items-center"
          style={{
            backgroundImage: `url(${bgimage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
         >
                <p className="text-white">IIS</p>
                <h1 className="text-white text-4xl">About us</h1>
         </div>
      </div>
    
    </>
  );
};

export default About;

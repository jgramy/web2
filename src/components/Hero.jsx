import React from "react";
import hero from "../../src/images/hero.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className="flex flex-wrap justify-between items-center text-white my-10 md:h-screen">
      <div className="flex flex-col justify-between items-start gap-12 md:w-1/2">
        <h1 className="text-3xl md:text-5xl font-bold">
          Blockchain Rectification
        </h1>
        <p className="text-2xl leading-10">
          Blockchain Rectification is an open protocol to communicate securely
          between Wallets and Dapps (Web3 Apps).
        </p>
        <div className="bg-[#3B82F6] text-2xl rounded-xl">
          <Link to='connect'>
            <button className="px-5 py-4 ">Connect</button>
          </Link>
        </div>
      </div>
      <div>
        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import {
  FaAd,
  FaAddressCard,
  FaAirFreshener,
  FaAmazon,
  FaAnchor,
} from "react-icons/fa";

const Home = () => {
  return (
    <div className=" h-screen w-full flex flex-col justify-center items-center bg-gray-300 gap-20">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-700">
          WELCOME TO SYNTAX SCRIBE !!
        </h1>
      </div>
      <div className="flex gap-10">
        <FaAd color="red" size={50} className="animate-bounce" />
        <FaAddressCard color="green" size={50} className="animate-pulse" />
        <FaAirFreshener color="violet" size={50} className="animate-ping" />
        <FaAmazon color="orange" size={50} className="animate-spin" />
        <FaAnchor color="blue" size={50} className="animate-bounce" />
      </div>
    </div>
  );
};

export default Home;
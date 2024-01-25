import React from "react";
import { FaSpinner } from "react-icons/fa";

const LoadingModal = ({ text, selectedWallet }) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-5 rounded-xl flex items-center justify-center w-full md:max-w-[700px] h-[80vh]">
        <FaSpinner className="animate-spin text-blue-500 mr-3 text-3xl md:text-7xl" />
        <p className="text-3xl text-blue-500">{text}</p>
      </div>
    </div>
  );
};

export default LoadingModal;

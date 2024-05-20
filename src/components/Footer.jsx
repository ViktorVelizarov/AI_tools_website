import React from 'react';
import { TiSocialLinkedin } from "react-icons/ti";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 p-16">
      <div className="container mx-auto px-10">
        <div className="flex flex-wrap justify-between mb-8 space-y-4 md:space-y-0">
          {/* About Scaleup */}
          <div className="w-full md:w-2/5 mb-8 md:mb-0 ">
            <h2 className="text-lg font-semibold mb-2">About Scaleup:</h2>
            <p className="text-sm">
              SCALEUP. helps to grow you while implementing a modern tech and processes into your HR, Sales, Data Analytics and Automation. We are an international team, fluent in 10+ languages, specialists in more than 100 cloud-based and AI tools, with strong local knowledge and presence. Let’s scale-up together!
            </p>
          </div>

          {/* Addresses */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0  ">
            <h2 className="text-lg font-semibold mb-2">Addresses:</h2>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 md:px-4 rounded-lg text-sm w-full md:w-auto">LUX</button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 md:px-4 rounded-lg text-sm w-full md:w-auto">PRG</button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 md:px-4 rounded-lg text-sm w-full md:w-auto">WAW</button>
              <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-3 md:px-4 rounded-lg text-sm w-full md:w-auto">KSC</button>
            </div>
          </div>

          {/* Contact */}
          <div className="w-full md:w-1/5 mb-8 md:mb-0">
            <h2 className="text-lg font-semibold mb-2">Contact:</h2>
            <div className="flex gap-2">
              <TiSocialLinkedin className="text-3xl text-white hover:text-blue-500 cursor-pointer" />
              <FaFacebook className="text-3xl text-white hover:text-blue-500 cursor-pointer" />
              <FaInstagram className="text-3xl text-white hover:text-blue-500 cursor-pointer" />
              <FaWhatsapp className="text-3xl text-white hover:text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-sm mt-8">
          SCALEUP. group © 2024 | <a href="#" className="text-blue-300">Privacy Policy</a> | <a href="#" className="text-blue-300">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

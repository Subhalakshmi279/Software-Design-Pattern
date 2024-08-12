import React from 'react';
import { FaFacebookF, FaInstagram, FaCodepen, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer" className="bg-sky-100 opacity-50 text-black-200 h-10 py-0.1 px-12 w-full fixed bottom-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-left">
          <p className="text-lg font-semibold mb-10">Timely©2024</p>
          <p className="text-lg font-bold "> Reech Studio 2019</p>
        </div>
        <div className="text-right flex items-center space-x-2 mb-16">
          <div className="footer-social flex space-x-4">
            <a href="#" className="text-white-200 hover:text-gray-400 transition duration-300">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-white-200 hover:text-gray-400 transition duration-300">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-white-200 hover:text-gray-400 transition duration-300">
              <FaCodepen size={20} />
            </a>
            <a href="#" className="text-white-200 hover:text-gray-400 transition duration-300">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;

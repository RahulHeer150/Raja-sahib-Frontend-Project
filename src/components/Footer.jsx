import React from "react";
import { FaSoundcloud, FaYoutube } from "react-icons/fa";
import Logo from '../assets/white-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 px-6 md:px-20 max-w-sreen">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Logo & Social */}
        <div>
          <img
            src={Logo}
            alt="Raja Sahib Ji"
            className="h-14 mb-4"
          />
          <p className="text-sm">Follow Us:</p>
          <div className="flex space-x-3 mt-2">
            <a href="#" className="bg-white p-2 rounded hover:bg-gray-200">
              <FaSoundcloud className="text-black text-xl" />
            </a>
            <a href="#" className="bg-white p-2 rounded hover:bg-gray-200">
              <FaYoutube className="text-black text-xl" />
            </a>
          </div>
        </div>

        {/* English Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">DHAN RAJA SAHIB JI</h3>
          <hr className="justify-center"/>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">About Raja Sahib Ji</a></li>
            <li><a href="#" className="hover:text-white">Bhagwan Vilas</a></li>
            <li><a href="#" className="hover:text-white">Path Shri Guru Granth Sahib Ji</a></li>
            <li><a href="#" className="hover:text-white">Noori Kirna</a></li>
          </ul>
        </div>

        {/* Punjabi Links */}
        <div>
          <h3 className="text-white font-semibold mb-3 text-xl">ਨਾਭ ਕੰਵਲ ਰਾਜਾ ਸਾਹਿਬ ਜੀ</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white text-lg">ਰਾਜਾ ਸਾਹਿਬ ਜੀ ਬਾਰੇ ਜਾਣੋ</a></li>
            <li><a href="#" className="hover:text-white text-lg">ਭਗਵਾਨ ਵਿਲਾਸ</a></li>
            <li><a href="#" className="hover:text-white text-lg">ਪਾਠ ਸ਼੍ਰੀ ਗੁਰੂ ਗ੍ਰੰਥ ਸਾਹਿਬ ਜੀ</a></li>
            <li><a href="#" className="hover:text-white text-lg">ਨੂਰੀ ਕਿਰਨਾਂ</a></li>
          </ul>
        </div>

        {/* Contact */}
      </div>
    </footer>
  );
};

export default Footer;

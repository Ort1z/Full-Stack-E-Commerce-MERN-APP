import React from 'react';
import DLogo from '../assest/DeveloperLogo.jpg'
import { Mail, Phone, User } from 'lucide-react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaX} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-400 to-gray-900 text-white py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-white">Maslot Tech</h3>
          <p className="text-sm">Your one-stop destination for quality products and exceptional service.</p>
          <div className="flex items-center space-x-2">
            <Phone size={16} />
            <span className="text-sm">+27 (15) 123-4567</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={16} />
            <span className="text-sm">contact@maslottech.com</span>
          </div>
          {/* Social Links For Shop*/}
          <div>
            <h4 className="font-semibold mb-4">Social Platforms:</h4>
            <div className="flex space-x-14">
              <a href="/" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-cyan-300 transition">
                <FaGithub />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-cyan-300 transition">
                <FaLinkedin />
              </a>
              <a href="/" target="_blank" rel="noopener noreferrer"
                className="text-2xl hover:text-cyan-300 transition">
                <FaTwitter />
              </a>
              {/*<a href="mailto:216135982@edu.vut.ac.za"
                className="text-2xl hover:text-cyan-300 transition">
                <FaEnvelope />
              </a>*/}
            </div>
          </div>

        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-cyan-300 transition">Shop</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition">About Us</a></li>
            <li><a href="/" className="hover:text-cyan-300 transition">Contact</a></li>
          </ul>
        </div>

        {/* Developer Info */}
        <div className='-space-x-20'>
          <h4 className="font-semibold mb-4 space-x-0">Developed By:</h4>
          <div className="flex items-center space-x-2 bg-black/20 p-3 rounded-lg">
            <a href="https://www.linkedin.com/in/thefreelancer201/" className="hover:text-cyan-300 transition">
            <img
              src={DLogo}
              alt="Developer"
              className="w-12 h-12 rounded-full border-2 border-cyan-500"
            />
            </a>
            <div>
              <p className="font-medium"><a href="https://www.linkedin.com/in/thefreelancer201/" className="hover:text-cyan-300 transition">MASINGITA OTTIS MALULEKE</a></p>
              <p className="text-xs text-gray-200"><a href="https://www.linkedin.com/in/thefreelancer201/" className="hover:text-cyan-300 transition">Full Stack Developer (Software Engineer)</a></p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-4">Connect With Developer:</h4>
          <div className="flex space-x-12">
            <a href="https://github.com/Ort1z" target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300 transition">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/thefreelancer201/" target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300 transition">
              <FaLinkedin />
            </a>
            <a href="https://x.com/TheFreelancer20" target="_blank" rel="noopener noreferrer"
              className="text-2xl hover:text-cyan-300 transition">
              <FaTwitter />
            </a>
            <a href="mailto:216135982@edu.vut.ac.za"
              className="text-2xl hover:text-cyan-300 transition">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-4 border-t border-gray-700">
        <p className="text-sm">
          © {new Date().getFullYear()} Maslot Tech. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
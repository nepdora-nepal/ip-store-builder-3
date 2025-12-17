import React from 'react';
import { Mail, Phone, MapPin, Twitter, Linkedin, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-16 px-4 sm:px-6 lg:px-8 border-t border-gray-800 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-t from-gray-900 to-transparent opacity-30 z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-300">
        {/* Brand Info */}
        <div className="col-span-full md:col-span-1">
          <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 mb-4">
            Lovable.ai
          </h3>
          <p className="text-md leading-relaxed">
            Revolutionizing customer relationships with intelligent AI.
            Build loyalty, drive growth.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
          <ul className="space-y-3">
            <li><a href="#features" className="hover:text-indigo-400 transition-colors duration-200">Features</a></li>
            <li><a href="#pricing" className="hover:text-indigo-400 transition-colors duration-200">Pricing</a></li>
            <li><a href="#faq" className="hover:text-indigo-400 transition-colors duration-200">FAQ</a></li>
            <li><a href="#contact" className="hover:text-indigo-400 transition-colors duration-200">Contact Us</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Legal</h4>
          <ul className="space-y-3">
            <li><a href="/privacy" className="hover:text-indigo-400 transition-colors duration-200">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-indigo-400 transition-colors duration-200">Terms of Service</a></li>
            <li><a href="/cookies" className="hover:text-indigo-400 transition-colors duration-200">Cookie Policy</a></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-6">Get in Touch</h4>
          <ul className="space-y-3">
            <li className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-indigo-400" />
              <span>info@lovable.ai</span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 h-5 text-indigo-400" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 h-5 text-indigo-400 mt-1" />
              <span>123 AI Avenue, Suite 100, Innovation City, CA 90210</span>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white transition-colors duration-200">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-indigo-300 hover:text-white transition-colors duration-200">
              <Facebook className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Lovable.ai. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaChartLine,
  FaGlobe,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-[#001a14] text-white pt-20 pb-8 px-6 md:px-12 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-teal-500 to-emerald-500 mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal-600 rounded-lg p-2">
                <FaChartLine className="text-white text-xl" />
              </div>
              <h2 className="text-3xl font-bold text-white">
                CRYPTAURA<span className="text-teal-400">INVESTSPHERE</span>
              </h2>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-2xl">
              CRYPTAURA INVESTSPHERE COMPANY is a premier international investment firm 
              specializing in strategic portfolio management across financial markets, 
              cryptocurrency exchanges, and emerging digital assets. Our team of qualified 
              professional traders and analysts delivers exceptional returns through 
              sophisticated investment strategies and risk-managed approaches.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaShieldAlt className="text-teal-400" />
                <span>Secure & Regulated</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <FaGlobe className="text-teal-400" />
                <span>Global Operations</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-3 pt-6">
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-teal-600 hover:scale-110 transition-all duration-300 group">
                <FaLinkedinIn size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-pink-600 hover:scale-110 transition-all duration-300 group">
                <FaInstagram size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-blue-500 hover:scale-110 transition-all duration-300 group">
                <FaTwitter size={18} className="group-hover:text-white" />
              </a>
              <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-blue-800 hover:scale-110 transition-all duration-300 group">
                <FaFacebookF size={18} className="group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-l-4 border-teal-500 pl-3">
              Investment Plans
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                Starter Plan
              </a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                Investors Plan
              </a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                Standard Plan
              </a></li>
              <li><a href="#" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                Executive Plan
              </a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white border-l-4 border-teal-500 pl-3">
              Contact Us
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3 group">
                <div className="bg-teal-500/20 rounded-lg p-2 group-hover:bg-teal-500 transition-colors">
                  <FaPhoneAlt className="text-teal-400 group-hover:text-white" size={16} />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Phone</span>
                  <p className="font-medium">+1 (555) 123-4567</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-teal-500/20 rounded-lg p-2 group-hover:bg-teal-500 transition-colors">
                  <FaEnvelope className="text-teal-400 group-hover:text-white" size={16} />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Email</span>
                  <p className="font-medium">invest@cryptaura-investsphere.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="bg-teal-500/20 rounded-lg p-2 group-hover:bg-teal-500 transition-colors">
                  <FaMapMarkerAlt className="text-teal-400 group-hover:text-white" size={16} />
                </div>
                <div>
                  <span className="text-sm text-gray-400">Headquarters</span>
                  <p className="font-medium">
                    27 Frankley Road<br />
                    New Plymouth Central<br />
                    New Zealand
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col lg:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-gray-400">
            <p>© 2024 CRYPTAURA INVESTSPHERE COMPANY | All Rights Reserved</p>
            <p className="text-xs mt-1">Registered and regulated financial services provider</p>
          </div>
          
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#" className="hover:text-teal-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Risk Disclosure</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Compliance</a>
            <a href="#" className="hover:text-teal-400 transition-colors">Support</a>
          </div>
        </div>

        {/* Regulatory Notice */}
        <div className="mt-6 pt-6 border-t border-white/5">
          <p className="text-xs text-gray-500 text-center">
            CRYPTAURA INVESTSPHERE COMPANY is a registered financial services provider. 
            Investments are subject to market risk. Please read our risk disclosure 
            before investing. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
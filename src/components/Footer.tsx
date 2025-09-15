import React from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";


const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-[#e8c965] via-[#e0c057] to-[#d4b347] text-[#333] py-3 px-6 border-t-4 border-[#a37c40] relative overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-8 left-8 w-18 h-18 bg-[#333] rounded-full blur-3xl"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-[#a37c40] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-[#333] rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -inset-3 bg-white/20 rounded-full blur-xl"></div>
            <img
              src="/img/logo1.jpg"
              alt="ELIAHA Photography Logo"
              className="relative w-24 h-24 object-contain rounded-full shadow-2xl border-4 border-white/30 backdrop-blur-sm"
            />
          </div>
        </motion.div>

        {/* Top Nav */}
      <motion.div
  className="flex justify-center items-center gap-3 sm:gap-10 border-y-2 border-[#333]/20 py-1 mb-6 text-[15px] flex-wrap"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  {[
    { name: "About Us", href: "/about" },
    { name: "Events", href: "/portfolio" },
    { name: "Consultations", href: "/contact" },
    { name: "Our Family", href: "/reviews" },
    { name: "FAQ", href: "/#" },
  ].map((item, idx) => (
    <motion.a
      key={idx}
      href={item.href}
      className="relative font-semibold whitespace-nowrap px-3 py-1 rounded-lg transition-all duration-300 hover:bg-white/20 hover:shadow-lg hover:scale-105 group"
      whileHover={{ y: -2 }}
    >
      <span className="group-hover:font-black group-hover:text-black transition-all duration-300">
        {item.name}
      </span>
      <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-black group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
    </motion.a>
  ))}
</motion.div>


        {/* Middle Sections */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-6 text-[15px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Contact */}
          <motion.div 
            className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20 hover:shadow-2xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-black text-lg mb-3 text-black relative">
              <i className="fas fa-phone-alt mr-2 text-[#a37c40]"></i>
              Contact
              <div className="absolute -bottom-2 left-0 w-10 h-1 bg-gradient-to-r from-[#a37c40] to-transparent rounded-full"></div>
            </h4>
            <div className="space-y-2">
              <p className="hover:font-bold hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center md:justify-start">
                <i className="fas fa-mobile-alt mr-2 text-[#a37c40] w-4"></i>
                +92 300 1234567
              </p>
              <p className="hover:font-bold hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope mr-2 text-[#a37c40] w-4"></i>
                info@eliahaphotography.com
              </p>
              <p className="hover:font-bold hover:text-black transition-all duration-300 cursor-pointer flex items-center justify-center md:justify-start">
                <i className="fas fa-map-marker-alt mr-2 text-[#a37c40] w-4"></i>
                Lahore, Pakistan
              </p>
            </div>
          </motion.div>
          
          {/* Hours */}
          <motion.div 
            className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-black text-lg mb-3 text-black relative">
              <i className="fas fa-clock mr-2 text-[#a37c40]"></i>
              Hours
              <div className="absolute -bottom-2 left-0 w-10 h-1 bg-gradient-to-r from-[#a37c40] to-transparent rounded-full"></div>
            </h4>
            <div className="space-y-1.5">
              <p className="font-bold italic text-black bg-white/20 px-2 py-1 rounded-lg">
                *By appointment only*
              </p>
              <p className="hover:font-bold hover:text-black transition-all duration-300">Tue - Fri: 11AM - 9PM</p>
              <p className="hover:font-bold hover:text-black transition-all duration-300">Sat & Sun: 12PM - 7PM</p>
              <p className="hover:font-bold hover:text-black transition-all duration-300 text-red-700 font-semibold">Closed Monday</p>
            </div>
          </motion.div>
          
          {/* Information */}
          <motion.div 
            className="text-center md:text-left bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20"
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0,0,0,0.1)" }}
            transition={{ duration: 0.3 }}
          >
            <h4 className="font-black text-lg mb-3 text-black relative">
              <i className="fas fa-info-circle mr-2 text-[#a37c40]"></i>
              Information
              <div className="absolute -bottom-2 left-0 w-10 h-1 bg-gradient-to-r from-[#a37c40] to-transparent rounded-full"></div>
            </h4>
          <div className="space-y-2">
  {[
    { name: "Home", link: "/", icon: "fas fa-home" },
    { name: "Contact Us", link: "/contact", icon: "fas fa-envelope" },
    { name: "Services", link: "/services", icon: "fas fa-cogs" },
    { name: "Portfolio", link: "/portfolio", icon: "fas fa-images" }
  ].map((link, idx) => (
    <p key={idx}>
      <a 
        href={link.link} 
        className="hover:font-bold hover:text-black transition-all duration-300 flex items-center justify-center md:justify-start group"
      >
        <i className={`${link.icon} mr-2 text-[#a37c40] w-4 group-hover:scale-110 transition-transform duration-300`}></i>
        {link.name}
      </a>
    </p>
  ))}
</div>

          </motion.div>
        </motion.div>

     

        {/* Copyright */}
       <motion.div
  className="w-full text-center text-xs text-gray-700 bg-white/30 backdrop-blur-sm py-2"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  © 2025 ELIAHA Photography | Developed with Love by{" "}
  <a
    href="https://technicmentors.com/"
    className="font-semibold hover:text-black transition-colors"
  >
    Technic Mentors
  </a>
</motion.div>

      </div>
    </footer>
  );
};

export default Footer;

import React from 'react'
import logo from '../../assets/AppLogo.png'
import { motion } from "framer-motion";
function landingPage() {
  return (
    <div className="landing-page items-center justify-center flex flex-col ">
      <motion.img
        src={logo}
        alt="Application logo image"
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.2 }}
      />
      <motion.h1
        className="text-4xl font-bold"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Find Your Groove Here!
          </motion.h1>
          <button className="mt-4 px-4 py-2 w-48 bg-[var(--color-secondary)] text-white rounded hover:scale-110 cursor-pointer transition-transform duration-500">
            Get Started
          </button>
    </div>
  );
}

export default landingPage;

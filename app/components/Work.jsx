import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Work = () => {
  return (
    <div
      className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4"
      id="work"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <h2 className="text-center text-5xl font-Ovo">My Work</h2>
      </motion.div>
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col"
      >
        <a
          href="https://petaniemulator.com"
          target="_blank"
          className="font-medium text-xl hover:text-teal-500"
        >
          Petani Emulator
        </a>
        <p>A simple web where you can find emulator games</p>
        <a
          href="/petani emulator.png"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/petani emulator.png"
            alt="Foto"
            width="100%"
            height="100%"
          />
        </a>
      </motion.div>
    </div>
  );
};

export default Work;

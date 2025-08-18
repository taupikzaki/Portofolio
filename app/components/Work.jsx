import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Work = () => {
  return (
    <div
      className="w-11/12 max-w-3xl h-screen text-center mx-auto flex flex-col items-center justify-center gap-4"
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
        className="flex flex-col lg:flex-row gap-5"
      >
        <div>
          <a
            href="https://petaniemulator.com"
            target="_blank"
            className="font-medium text-xl hover:text-teal-500 underline"
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
              className="rounded-lg"
            />
          </a>
        </div>
        <div>
          <a
            href="https://xtaupik.netlify.app/"
            target="_blank"
            className="font-medium text-xl hover:text-teal-500 underline"
          >
            X Clone
          </a>
          <p>social media App made with next js</p>
          <a href="/x.jpeg" target="_blank" rel="noopener noreferrer">
            <img
              src="/x.jpeg"
              alt="Foto"
              width="100%"
              height="100%"
              className="rounded-lg"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Work;

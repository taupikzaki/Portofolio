import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { RiCloseFill, RiMenu5Fill } from "@remixicon/react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    });
  });
  const [isOpen, setIsOpen] = useState(false);
  const handleLinkClick = () => {
    setIsOpen(false);
  };
  return (
    <nav className="sticky top-0 z-10 pt-5">
      <div className="container mx-auto flex justify-between px-5">
        <div className="flex items-center">
          <a href="#top">Taupik</a>
        </div>
        <div className="gap-5 py-2 px-4 rounded-full bg-teal-600 dark:bg-teal-900 hidden md:inline-flex">
          <a
            href="#top"
            className="hidden md:inline-flex px-3 py-2 gap-1 font-medium text-white items-center hover:text-black "
          >
            Home
          </a>
          <a
            href="#about"
            className="hidden md:inline-flex px-3 py-2 gap-1 font-medium text-white items-center hover:text-black "
          >
            About Me
          </a>
          <a
            href="#work"
            className="hidden md:inline-flex px-3 py-2 gap-1 font-medium text-white items-center hover:text-black "
          >
            My Work
          </a>
          <a
            href="#contact"
            className="hidden md:inline-flex px-3 py-2 gap-1 font-medium text-white items-center hover:text-black "
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <RiCloseFill /> : <RiMenu5Fill />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className={`fixed left-0 top-1/2 transform -translate-y-1/2 bg-teal-600 dark:bg-teal-900 text-white hover:text-black rounded-lg shadow-lg w-fit mx-4 p-6 z-50 transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex flex-col space-y-4">
            <a href="#top" onClick={handleLinkClick}>
              Home
            </a>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
            <a href="#work" onClick={handleLinkClick}>
              My Work
            </a>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

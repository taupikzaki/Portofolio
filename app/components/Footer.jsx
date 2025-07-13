import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="" className="w-6" />
          <a href="mailto:Taupikalmuzaki404@gmail.com">
            Taupikalmuzaki404@gmail.com
          </a>
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-center border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>
          Made with ❤️ using{" "}
          <a href="https://nextjs.org/" className="hover:text-teal-500">
            Next JS
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;

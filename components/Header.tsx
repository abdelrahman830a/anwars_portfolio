import { Social } from "@/typing";
import { motion } from "framer-motion";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {
  socials: Social[];
};

function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 md:items-center">
      <motion.div
        initial={{
          x: -100,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center">
        {socials?.map((social) => (
          <SocialIcon
            key={social?._id}
            url={social?.url}
            fgColor="gray"
            bgColor="transparent"
            className="cursor-pointer animate-pulse"
          />
        ))}
      </motion.div>

      <motion.div
        initial={{
          x: 100,
          opacity: 0,
          scale: 0.25,
        }}
        animate={{
          x: 0,
          scale: 1,
          opacity: 1,
        }}
        transition={{
          duration: 1,
        }}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer animate-pulse"
          network="email"
          fgColor="gray"
          bgColor="transparent"
          href="#contact"
        />
        <a href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get in touch
          </p>
        </a>
      </motion.div>
    </header>
  );
}

export default Header;

import React from "react";
import { motion } from "framer-motion";
import { PageInfo } from "@/typing";
import { urlFor } from "@/sanity";
type Props = {
  pageInfo: PageInfo;
};

function About({ pageInfo }: Props) {
  return (
    <div className="h-screen flex flex-col md:flex-row relative text-center md:text-left max-w-7xl px-10 justify-center space-y-6 md:justify-evenly items-center mx-auto">
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
        about
      </h3>

      <div>
        <motion.img
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          src={urlFor(pageInfo?.profilePic).url()}
          alt="avatar"
          className="w-48 h-48 shrink-0 rounded-full object-cover md:rounded-lg md:w-72 md:h-96"
        />
      </div>

      <motion.div 
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#F7AB0A]/60">little</span>{" "}
          background
        </h4>
        <p className="text-base max-w-md">{pageInfo?.backgroundInformation}</p>
      </motion.div>
    </div>
  );
}

export default About;

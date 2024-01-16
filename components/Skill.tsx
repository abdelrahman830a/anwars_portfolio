import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import avatar from "@/public/assets/images";
import { Skill as SkillType } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  skill: SkillType;
  directionLeft?: boolean;
};

function Skill({ directionLeft, skill }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.div
        initial={{
          x: -50,
          opacity: 0,
        }}
        transition={{ duration: 0.5 }}
        whileInView={{ opacity: 1, x: 0 }}>
        <img
          src={urlFor(skill?.image).url()}
          alt="skills"
          className="rounded-full border border-gray-500 object-cover object-center w-20 h-20 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
      </motion.div>

      <div className="absolute opacity-0 group-hover:opacity-80 group-hover:bg-white transition duration-300 ease-in-out w-full h-full rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.percentage}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skill;

import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "@/typing";
type Props = {
  experiences: Experience[];
};

function WorkExperience({experiences}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <div className="absolute top-24 md:top-6 z-20">
        <h3 className=" uppercase tracking-[15px] text-gray-500 text-2xl">
          Experience
        </h3>
      </div>

      <div className="w-full flex space-x-5 overflow-x-scroll py-10 md:py-[40px] scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/60 overflow-hidden snap-x snap-mandatory">
          {experiences.map((experience) => (
            <ExperienceCard 
              key={experience._id}
              experience={experience}
            />
          ))}
      </div>
    </motion.div>
  );
}

export default WorkExperience;

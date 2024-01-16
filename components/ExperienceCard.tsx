import avatar from "@/public/assets/images";
import { v4 as uuidv4 } from 'uuid';
import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typing";
import { urlFor } from "@/sanity";
import Image from "next/image";

type Props = {
  experience: Experience;
};

function ExperienceCard({ experience }: Props) {
  return (
    <article className="snap-center relative flex flex-col rounded-lg items-center  text-center space-y-7 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-200 cursor-pointer w-[290px] h-[60vh] overflow-hidden bg-[rgb(61,60,60)] text-sm md:text-base xl:text-xl overflow-x-hidden md:w-[500px] md:h-[75vh]">
      <motion.div
        initial={{
          y: -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false }}
        className="md:p-2 relative top-2">
        <img
          src={urlFor(experience?.companyImage).url()}
          alt="experience at google"
          className="w-24 h-24 md:w-[100px] md:h-[100px] rounded-full md:rounded-lg object-cover object-center"
        />
      </motion.div>

      <div className="px-0 md:px-10 w-full h-full">
        <h4 className="text-3xl text-gray-300 uppercase font-semibold">
          {experience?.jobTitle}
        </h4>
        <p className="text-2xl font-light text-gray-400">
          {experience?.companyName}
        </p>

        <div className="flex md:justify-center justify-center gap-5 my-2">
          {experience?.technologies
            .slice(0, experience?.technologies.length / 2)
            .map((technology) => (
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                key={uuidv4()}
                src={urlFor(technology.image).url()}
                alt="tech-used"
                className="w-10 h-10 rounded-full object-cover"
              />
            ))}
          {experience?.technologies
            .slice(
              experience?.technologies.length / 2,
              experience?.technologies.length
            )
            .map((technology) => (
              <motion.img
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                key={uuidv4()}
                src={urlFor(technology.image).url()}
                alt="tech-used"
                className="w-10 h-10 rounded-full object-cover"
              />
            ))}
        </div>
        <p className="text-md py-2 px-2 text-gray-400">
          {new Date(experience?.dateStarted).toDateString()} -{" "}
          {experience?.isCurrentlyWorkingHere
            ? "present"
            : new Date(experience?.dateEnded).toDateString()}
        </p>

        <ul className="h-48 md:h-28 pr-3 md:pr-0 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80 ">
          {experience.points.map((point) => (
            <li className="font-mono" key={uuidv4()}>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;

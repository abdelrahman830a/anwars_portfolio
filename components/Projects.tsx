import avatar from "@/public/assets/images";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/typing";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="h-screen relative overflow-hidden flex flex-col md:flex-row text-left max-w-full justify-evenly mx-auto items-center z-0 space-y-2">
      <div className="absolute top-20 md:top-6 gap-2 ">
        <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
          Projects
        </h3>
      </div>

      <div
        className="snap-x snap-mandatory flex relative w-full overflow-x-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A]/60 overflow-y-hidden 
      z-20  h-[83vh] md:h-full">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen snap-center flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20 md:p-36">
            <motion.div
              initial={{
                y: -50,
                opacity: 0,
              }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2 }} className="">
              <img
                src={urlFor(project?.image).url()}
                className="w-44 h-44 md:w-36 md:h-36 object-cover"
                alt="project-img"
              />
            </motion.div>

            <div className="space-y-10 px-0 md:px-8 max-w-6xl">
              <h4 className="text-3xl md:text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Project {i + 1} of {projects.length}:
                </span>{" "}
                {project?.title}
              </h4>

              <div className="flex items-center justify-center space-x-5">
                {project?.technologies
                  .slice(0, project?.technologies.length / 2)
                  .map((technology) => (
                    <motion.img
                      initial={{ x: -100, opacity: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2 }}
                      src={urlFor(technology.image).url()}
                      alt="tech-used"
                      key={technology?._id}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ))}
                {project?.technologies
                  .slice(
                    project?.technologies.length / 2,
                    project?.technologies.length
                  )
                  .map((technology) => (
                    <motion.img
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1.2 }}
                      src={urlFor(technology.image).url()}
                      alt="tech-used"
                      key={technology?._id}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ))}
              </div>

              <p className="text-md md:text-lg text-center w-72 md:w-[50rem]">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[36%] md:top-[30%] bg-[#F7AB0A]/10 left-0 h-[135px] md:h-[300px] -skew-y-[0deg] md:-skew-y-6" />
    </motion.div>
  );
}

export default Projects;

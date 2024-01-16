import React from 'react'
import Skill from './Skill'
import {motion} from 'framer-motion'
import { Skill as SkillType } from '@/typing';
type Props = {
  skills: SkillType[];
}

function Skills({skills}: Props) {
  return (
    <motion.div
     className="relative flex flex-col xl:flex-row text-center md:text-left max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-2 mx-auto items-center">
      <div className='absolute top-20 md:top-9 z-20 flex items-center justify-center flex-col space-y-3'>
        <h3 className=" uppercase tracking-[15px] text-gray-500 text-2xl">
          Skills
        </h3>
        <h3 className="uppercase tracking-[3px] text-gray-500 text-sm font-semibold">
          hover on a skill to show proeficiency
        </h3>
      </div>

      <motion.div  initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true}}
       className="relative top-12 md:top-20 grid grid-cols-3 grid-rows-4 md:grid md:grid-cols-4 gap-5 mt-2">
        {skills.map((skill) => (
          <Skill key={skill?._id} skill={skill} />
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Skills
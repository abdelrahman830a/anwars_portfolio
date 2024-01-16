import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 0.5, 1],
        opacity: [0.8, 0.9, 1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 4,
      }}
      className="relative flex justify-center items-center">
      <div className="absolute border border-gray-600 h-24 w-24 md:h-[200px] md:w-[200px]  rounded-full mt-52 animate-ping" />
      <div className="absolute border border-gray-600 h-32 w-32 md:h-[300px] md:w-[300px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-gray-500 h-44 w-44 md:h-[500px] md:w-[500px] rounded-full mt-52 animate-ping" />
      <div className="absolute border border-gray-500 h-52 w-52 md:h-[650px] md:w-[650px] rounded-full mt-52 animate-pulse" />
      <div className="absolute border border-gray-200 h-72 w-72 md:h-[800px] md:w-[800px] rounded-full mt-52 animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles
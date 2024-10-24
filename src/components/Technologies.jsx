import React from "react";
import { FaCss3, FaHtml5, FaNodeJs } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { motion } from "framer-motion";
const iconVarients = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2
        className="my-20 text-center text-4xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
      >
        Technologies
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4"
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
        initial="initial"
        animate="animate"
        varients={iconVarients(2.5)}>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={iconVarients(3)}>
          <TbBrandNextjs className="text-7xl" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={iconVarients(5)}>
          <SiMongodb className="text-7xl text-cyan-500" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={iconVarients(2)}>
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={iconVarients(6)}>
          <FaHtml5 className="text-7xl text-black-300" />
        </motion.div>
        <motion.div className="p-4"
        initial="initial"
        animate="animate"
        variants={iconVarients(4)}>
          <FaCss3 className="text-7xl text-violet-300" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;

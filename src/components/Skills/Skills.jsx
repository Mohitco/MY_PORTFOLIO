import React from "react";
import "../../index.css";
import { skillsInfo } from "../../skillsData.js";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans skills-gradient"
    >
      {/* Section title */}
      <div className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          An overview of my technical skills and expertise developed through
          various projects and practical experiences
        </p>
      </div>

      {/* Skills Category */}
      <div className="flex flex-wrap justify-between py-10">
        {skillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
            whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            exit={{ opacity: 0, filter: "blur(10px)", y: -50 }}
            transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 sm:py-6 py-8 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
              {category.title}
            </h3>

            {/* skills Items */}
            <Tilt
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 w-full">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: false }}
                    className="md:flex-row flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-5 text-center sm:flex-col hover:border-[#8245ec] hover:shadow-[0_0_15px_rgba(130,69,236,0.6)] transition-all"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-4 h-4 sm:w-9 sm:h-9"
                    />
                    <span className="text-xs sm:text-sm text-gray-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

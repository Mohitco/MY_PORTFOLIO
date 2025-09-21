import React from "react";
import ff from "../../assets/Company_logo/FF.png";
import si from "../../assets/Company_logo/si.png";
import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      id: 0,
      img: si,
      role: "Python Developer Intern",
      company: "Solitaire Infosys",
      date: "Aug 2024 – Oct 2024",
      desc: "Developed REST APIs with Node.js and Express, optimized database queries in MySQL, and collaborated with frontend team to deliver seamless user experiences.",
      skills: ["Node.js", "Express", "MySQL", "Postman", "API Design"],
    },
    {
      id: 1,
      img: ff,
      role: "Fullstack Developer",
      company: "Future Finder",
      date: "Jan 2025",
      desc: "Worked as a Fullstack Developer, building and maintaining scalable web applications, handling both frontend and backend development, integrating APIs, and optimizing performance.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Git",
      ],
    },
  ];

  return (
    <>
      <section
        id="experience"
        className="pb-24 py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-2"
      >
        {/* section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
          <div className="w-40 h-1 bg-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My journey as a fresher, highlighting the internships, trainings,
            and projects that shaped my skills in fullstack development.
          </p>
        </div>
        {/* Experience Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute sm:h-[800px] sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
          {/* Experience Entry */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className={`relative flex sm:items-end w-full mb-16 
      ${index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"}`}
            >
              {/* timeline circle */}
              <div className="absolute top-3  sm:top-[97%] md:top-1/2 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16  rounded-full sm:flex justify-center items-center z-10">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* content box with scroll animation */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 50 }}
                whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)", y: -50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
               className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md 
    transform transition-transform duration-300 hover:scale-105
    ${index % 2 === 0 
        ? "ml-6 sm:ml-0 sm:mr-auto pr-1" 
        : "ml-6 sm:mr-0 sm:ml-auto pl-1"
    }`}
              >
                {/* logo inside box */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-md overflow-hidden">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {experience.role}
                    </h3>
                    <p className="text-purple-400 font-semibold">
                      {experience.company}
                    </p>
                    <p className="text-gray-400 text-sm">{experience.date}</p>
                  </div>
                </div>

                {/* description */}
                <p className="text-gray-300">{experience.desc}</p>

                {/* skills */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {experience.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="text-sm bg-purple-600 text-white px-3 py-1 border rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Experience;

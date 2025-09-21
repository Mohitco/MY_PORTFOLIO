import React from "react";
import { motion } from "framer-motion";
import cgc from "../../assets/College_logo/cgc.png";
import gss from "../../assets/College_logo/gss.png";
import dbvm from "../../assets/College_logo/DBVM.png";
function Education() {
  const education = [
  {
    id: 0,
    img: cgc,
    school: "Chandigarh Engineering College, Landran",
    degree: "B.Tech in Computer Science and Engineering",
    date: "2021 – 2025",
    grade: "75%",
    desc: "Completed my B.Tech in Computer Science and Engineering with a strong foundation in programming, data structures, and backend development. Worked on multiple projects and internships, focusing on building scalable web applications. 2025 Passout.",
  },
  {
    id: 1,
    img: gss,
    school: "Government Senior Secondary School",
    degree: "12th (Science Stream)",
    date: "2020 – 2021",
    grade: "88%",
    desc: "Successfully completed 12th standard with Science stream. Developed strong analytical and logical problem-solving skills that laid the groundwork for pursuing engineering.",
  },
  {
    id: 2,
    img: dbvm,
    school: "Durga Bal Vidya Mandir School",
    degree: "10th",
    date: "2018 – 2019",
    grade: "76%",
    desc: "Completed 10th standard, building a solid academic foundation and actively participating in extracurricular activities.",
  },
];


  return (
    <>
      <section
        id="education"
        className="pb-24 py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans skills-gradient clip-path-custom-3 overflow-hidden"
      >
        {/* section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
          <div className="w-40 h-1 bg-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here
            are the details of my academic background
          </p>
        </div>
        {/* education Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute sm:h-[1200px] sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>
          {/* education Entry */}
          {education.map((education, index) => (
            <div
              key={education.id}
              className={`relative flex w-full mb-16 
      ${index % 2 !== 0 ? "sm:justify-end" : "sm:justify-start"}`}
            >
              {/* timeline circle */}
              <div className="absolute top-0 md:top-0 xl:top-1/2 sm:left-1/2 transform -translate-x-1/2 bg-gray-400 border-4 border-[#8245ec] w-12 h-12 sm:w-16 sm:h-16  rounded-full sm:flex justify-center items-center z-10">
                <img
                  src={education.img}
                  alt={education.school}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* content box with scroll animation */}
              <motion.div
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100, // right if even, left if odd
                  filter: "blur(10px)",
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  x: index % 2 === 0 ? 100 : -100,
                  filter: "blur(10px)",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md 
  transform transition-transform duration-300 hover:scale-105 sm:mt-12
  ${
    index % 2 !== 0
      ? "ml-7 sm:ml-0 sm:mr-auto pr-1"
      : "ml-7 sm:mr-0 sm:ml-auto pl-1"
  }`}
              >
                {/* logo inside box */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white rounded-md overflow-hidden hidden sm:block">
                    <img
                      src={education.img}
                      alt={education.school}
                      className="w-full h-full object-contain "
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {education.degree}
                    </h3>
                    <p className="text-purple-400 font-semibold">
                      {education.school}
                    </p>
                    <p className="text-gray-400 text-sm">{education.date}</p>
                  </div>
                </div>

                {/* description */}
                <p className="mt-4 text-gray-300">Grade: {education.grade}</p>
                <p className="mt-4 text-gray-400">{education.desc}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Education;

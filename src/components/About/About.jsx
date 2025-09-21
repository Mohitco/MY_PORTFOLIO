import React from "react";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";
import image from "../../assets/image/image.png";
function About() {
  return (
    <>
      <section
        id="about"
        className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
      >
        <div className="flex flex-col-reverse md:flex-row justify-between items-center">
          {/* Left side */}
          <div className="md:W-1/2 text-center md:text-left mt-8 md:mt-0">
            {/* Greeting */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white">
              Hi I'm
            </h1>
            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
              Aadarsh Kumar
            </h2>
            {/* Skills heading with Typing Effects */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[38245ec] leading-tight">
              <span className="text-white">I'm a</span>
              <TypeAnimation
                sequence={[
                  " Fullstack Developer", // text
                  2000, // wait 2s
                  " Backend Developer",
                  2000,
                  " Software Engineer",
                  2000,
                  " Coder",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-[#8245ec] font-bold"
              />
            </h3>
            {/* About me paragraph */}
            <p className="text-base sn:text-lg md:text-lg text-gray-400 mt-8 mb-10 leading-relaxed">
              I am a Fullstack Developer specializing in building modern,
              scalable, and user-friendly web applications. With expertise in
              React,Next Node.js, Express, and MongoDB, I focus on writing
              clean, efficient code and delivering seamless digital experiences.
              Passionate about problem-solving and continuous learning, I thrive
              on turning ideas into reliable solutions that make an impact.
            </p>
            {/* Resume button */}
            <a
              href="https://drive.google.com/file/d/1FFUDSumaJ2QeIiUbOBwyC2nC69W2gecX/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow: "0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec",
              }}
            >
              Download CV
            </a>
          </div>
          {/* Right side */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <Tilt
  className="w-48 h-48 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] border-4 border-purple-700 rounded-full"
  tiltMaxAngleX={20}
  tiltMaxAngleY={20}
  perspective={1000}
  scale={1.05}
  transitionSpeed={1000}
>
  <img
    src={image}
    alt="Profile"
    className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
  />
</Tilt>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;

import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
function Navbar() {
  const [isOpen, setOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("");

  const [isScrolled, setIsScrolled] = useState(false);

  //Check Scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Scroll Function
  const handleMenuItems = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false);
    const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth", block: "start" });
  }f
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
          isScrolled
            ? "bg-black/50 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="text-white py-5 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg font-semibold cursor-pointer">
            <span className="text-[#8245ec]">&lt;</span>
            <span className="text-white">Aadarsh</span>
            <span className="text-[#8245ec]">/</span>
            <span className="text-white">Kumar</span>
            <span className="text-[#8245ec]">&gt;</span>
          </div>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-gray-300">
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] ${
                  activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
              >
                <button
                  onClick={() => {
                    handleMenuItems(item.id);
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Social Media Icons */}
          <div className=" hidden md:flex space-x-4">
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaGithub size={24} />
            </a>
            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec]"
            >
              <FaLinkedin size={24} />
            </a>
          </div>

          {/* Mobile Menu Icons */}
          <div className="md:hidden">
            {isOpen ? (
              <FiX
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setOpen(false)}
              />
            ) : (
              <FiMenu
                className="text-3xl text-[#8245ec] cursor-pointer"
                onClick={() => setOpen(true)}
              />
            )}
          </div>
        </div>
        {/* mobile Items */}
        {isOpen && (
          <div
            className=" absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 
bg-[#05041480] backdrop-blur-lg 
z-50 rounded-lg shadow-lg"
          >
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`cursor-pointer hover:text-white hover:scale-110 transition-all duration-300  ${
                    activeSection === item.id ? "text-[#8245ec]" : ""
                  }`}
                >
                  <button
                    onClick={() => {
                      handleMenuItems(item.id);
                    }}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <div className="flex space-x-4">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 "
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white hover:scale-110 transition-all duration-300 "
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;


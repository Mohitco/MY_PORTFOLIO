import React, { useState } from 'react'
import { motion } from 'framer-motion'
import portfolio from '../../assets/projects/portfolio.png';

function Work() {
  const projects = [
    {
      id: 0,
      title: "Task Management System",
      desc: "A full-stack MERN application to manage daily tasks with features like add, update, delete, and track tasks.",
      image: "https://assets.hongkiat.com/uploads/project-task-management-tools/monday-com.jpg",
      tags: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/yourusername/task-management-system",
      webapp: "https://your-live-task-app.com"
    },
    {
      id: 1,
      title: "E-commerce Website with Payment Gateway",
      desc: "A full-stack MERN e-commerce platform with product catalog, cart, checkout, and payment integration using Stripe.",
      image: "https://5.imimg.com/data5/SELLER/Default/2024/8/441535251/QG/NY/RQ/92862087/ecommerce-website.jpeg",
      tags: ["MongoDB", "Express", "React", "Node.js", "Stripe", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/yourusername/ecommerce-website",
      webapp: "https://your-live-ecommerce.com"
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      desc: "A responsive personal portfolio website to showcase projects, skills, and contact details.",
      image: portfolio,
      tags: ["HTML", "CSS", "JavaScript", "React"],
      github: "https://github.com/yourusername/portfolio-website",
      webapp: "https://your-portfolio.com"
    },
    {
      id: 3,
      title: "Blog Platform",
      desc: "A MERN stack blog application where users can create, edit, delete, and comment on posts.",
      image: "https://cfw.paymoapp.com/wp-content/uploads/2018/04/paymo.png",
      tags: ["MongoDB", "Express", "React", "Node.js", "JavaScript", "CSS", "HTML"],
      github: "https://github.com/yourusername/blog-platform",
      webapp: "https://your-live-blog.com"
    },
    {
      id: 4,
      title: "Chat Application",
      desc: "A real-time chat application using Socket.io for instant messaging between multiple users.",
      image: "https://repository-images.githubusercontent.com/788595304/b4bd3acc-dae0-4e79-af50-a25075b456d8",
      tags: ["Node.js", "Express", "Socket.io", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/yourusername/chat-application",
      webapp: "https://your-live-chat.com"
    }
  ];

  const[selectProject, setSelectProject] = useState(null);

  const handleOpen = (project) => {
    setSelectProject(project);
  }

  const handleClosedModal = () => {
    setSelectProject(null)
  }

  return (
    <>
      <section
        id='work'
        className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative'
      >
        {/* section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
          <div className="w-40 h-1 bg-purple-500 mx-auto mt-2"></div>
          <p className="text-gray-400 mt-4 text-lg font-semibold">
            A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
          </p>
        </div>

        {/* Project Grid */}
        <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
          {projects.map((project) => (
            <motion.div
              key={project.id}
              onClick={() => {handleOpen(project)}}
            className='border border-white bg-gray-900/80 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm 
             hover:bg-[#8245ec]/20 hover:shadow-[0_0_25px_#8245ec] transition-all duration-300  mx-auto cursor-pointer'
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
            >
              {/* Square Image */}
              <div className='w-full aspect-square p-4'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-xl'
                />
              </div>

              {/* Card Content */}
              <div className='p-6'>
                <h3 className='text-2xl font-bold text-white mb-2'>
                  {project.title}
                </h3>
                <p className='text-gray-500 mb-4 pt-3 line-clamp-3'>
                  {project.desc}
                </p>

                {/* Tags */}
                <div className='mb-4'>
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Modal container */}
        {selectProject && (
          <div className='fixed inset-0 z-50 flex items-center justify-center 
                bg-black/30 backdrop-blur-md p-4'>
            <div className='bg-gray-900 rounded-xl shadow-2xl lg:w-fu;; w-[90%] max-w-3xl overflow-hidden relative'>
              <div className='flex justify-end p-4'>
                <button onClick={handleClosedModal} className='text-white text-3xl font-bold hover:text-purple-500'>
                  &times;
                </button>
              </div>
              <div className='flex flex-col'>
                <div className='sm:w-[65%] w-[100%] lg:w-[70%] flex justify-center bg-gray-900 px-4 sm:mx-auto'>
                  <img src={selectProject.image} alt={selectProject.title} className='lg:w-full w-[95%] object-contain rounded-xl shadow-2xl'/>
                </div>
                <div className='p-6'>
                  <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>{selectProject.title}</h3>
                  <p className='text-gray-400 mb-6 lg:text-base text-xs'>{selectProject.desc}</p>
                  <div className='fle flex-wrap gap-2 mb-6'>
                    {selectProject.tags.map((tag,index) => (
                      <span
                      key={index}
                      className='bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1'
                    >
                      {tag}
                    </span>
                    ))}
                  </div>
                  <div className='flex gap-2 w-[30%]'>
                    {/* Github Link */}
                    <a href={selectProject.github} target='_blank' rel='noopener noreferrer' className='w-50 h-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#8245ec] lg:px-6 lg:py-2 px-2 py-1 rounded-xl  text-sm font-semibold text-center'>Github</a>
                    {/* Live Demo */}
                    <a href={selectProject.webapp} target='_blank' rel='noopener noreferrer' className='w-50 h-full bg-gray-800 text-gray-400 hover:text-white hover:bg-[#8245ec] lg:px-6 lg:py-2 px-2 py-1 rounded-xl  text-sm font-semibold text-center text-nowrap'>view Live</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  )
}

export default Work

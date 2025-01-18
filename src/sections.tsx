import { Sun, Moon, Mail, Github, Linkedin, Terminal, Code, Cpu, ExternalLink, Check, Lightbulb, Book } from "lucide-react";
import React, { useState } from "react";

const Projects = () => {
    const [darkMode, setDarkMode] = useState(true);
  
    const skills = {
      languages: ['Java', 'Python', 'JavaScript', 'Dart', 'SQL'],
      tools: ['Git', 'Docker', 'Flutter', 'React'],
      cloud: ['Firebase', 'MySQL', 'AWS (in progress)']
    };
  
    const projects = [
     
      {
        title: "Arwa",
        description: "A platform bridging freelance accountants with companies, featuring an AI-powered chatbot for basic accounting needs and intelligent accountant recommendations.",
        achievement: "🏆 4th Place - Raqeem Hackathon",
        image: "/arwa.png",
        demoLink: "https://majestic-frangipane-de9382.netlify.app",
        githubLink: "https://github.com/ibrahimRabeh/Arwa",
        tags: ["Flutter", "AI Chatbot", "Firebase"],
        color: "from-blue-600 to-cyan-500"
      },
      {
        title: "Arwa",
        description: "A platform bridging freelance accountants with companies, featuring an AI-powered chatbot for basic accounting needs and intelligent accountant recommendations.",
        achievement: "🏆 4th Place - Raqeem Hackathon",
        image: "/arwa.png",
        demoLink: "https://majestic-frangipane-de9382.netlify.app",
        githubLink: "https://github.com/ibrahimRabeh/Arwa",
        tags: ["Flutter", "AI Chatbot", "Firebase"],
        color: "from-blue-600 to-cyan-500"
      },  {
        title: "Arwa",
        description: "A platform bridging freelance accountants with companies, featuring an AI-powered chatbot for basic accounting needs and intelligent accountant recommendations.",
        achievement: "🏆 4th Place - Raqeem Hackathon",
        image: "/arwa.png",
        demoLink: "https://majestic-frangipane-de9382.netlify.app",
        githubLink: "https://github.com/ibrahimRabeh/Arwa",
        tags: ["Flutter", "AI Chatbot", "Firebase"],
        color: "from-blue-600 to-cyan-500"
      },
      {
        title: "Memartech",
        description: "An innovative app connecting architecture firms and designers with clients. Features text-to-3D transformation of client requests, appointment scheduling, and comprehensive search functionality for firms and designers.",
        achievement: "🏆 1st Place - ROSHN Architecture Hackathon",
        image: "/Openningscreen.jpg",
        demoLink: "https://drive.google.com/file/d/1RmxfGEQemO4qv_Xui1qpMxTEVMdh8Zfi/view?usp=drivesdk",
        githubLink: "https://github.com/ibrahimRabeh/Memar_tech_test/tree/main",
        tags: ["Flutter", "Firebase", "AI Integration"],
        color: "from-fuchsia-600 to-violet-600"
      },
      {
        title: "Makzon",
        description: "Smart stock management application for supermarkets with AI-driven notifications for stock needs and product suggestions based on seasonal and local trends.",
        image: "/makzon.jpeg",
        demoLink: "https://superlative-llama-9f5dcc.netlify.app",
        githubLink: "https://github.com/ibrahimRabeh/Mkzoon",
        tags: ["Flutter", "AI", "Analytics"],
        color: "from-emerald-500 to-teal-500"
      }
    ];
  
    return (
      <div className={`min-h-screen transition-colors duration-300 ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900'
      }`}>
        {/* Navbar */}
        <nav className={`fixed w-full z-50 backdrop-blur-lg ${
          darkMode ? 'bg-gray-900/90 border-b border-gray-800' : 'bg-white/90 border-b border-indigo-100'
        }`}>
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className={`text-xl font-bold ${
                  darkMode ? 'text-white' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text'
                }`}>Ibrahim Aljohani</span>
              </div>
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-2 rounded-lg transition-colors ${
                    darkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'
                  }`}
                >
                  {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
                <a href="mailto:Ibrahim.rabehh@gmail.com" className={`p-2 hover:text-indigo-500 transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}>
                  <Mail className="w-5 h-5" />
                </a>
                <a href="https://github.com/ibrahimRabeh" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}>
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/ibrahim-aljohany" target="_blank" rel="noopener noreferrer" className={`p-2 transition-colors ${
                  darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}>
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </nav>
  
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-5xl lg:text-6xl font-bold">
                  Hello, I'm Ibrahim Aljohani
                  <span className={`block mt-2 ${
                    darkMode ? 'text-blue-400' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text'
                  }`}>IT Specialist & Developer</span>
                </h1>
                <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Transforming ideas into reality through code and cloud solutions. 
                  Specializing in Flutter development and cloud engineering.
                </p>
                <div className="flex space-x-6">
                  <a 
                    href="#projects" 
                    className={`px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500' 
                        : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
                    }`}
                  >
                    View Projects
                  </a>
                  <a 
                    href="#contact" 
                    className={`px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                      darkMode 
                        ? 'bg-gray-800 text-white hover:bg-gray-700' 
                        : 'bg-white text-indigo-600 shadow-lg hover:shadow-xl'
                    }`}
                  >
                    Contact Me
                  </a>
                </div>
              </div>
              <div className={`relative p-8 rounded-2xl ${
                darkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl' 
                  : 'bg-white shadow-2xl'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
                <Terminal className={`w-12 h-12 mb-6 ${
                  darkMode ? 'text-blue-400' : 'text-indigo-600'
                }`} />
                <h2 className="text-2xl font-bold mb-6">Technical Expertise</h2>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-semibold mb-4">Languages</h3>
                    <ul className="space-y-3">
                      {skills.languages.map((skill, index) => (
                        <li key={index} className="flex items-center">
                          <Code className={`w-5 h-5 mr-3 ${
                            darkMode ? 'text-blue-400' : 'text-indigo-600'
                          }`} />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-4">Tools & Technologies</h3>
                    <ul className="space-y-3">
                      {skills.tools.map((tool, index) => (
                        <li key={index} className="flex items-center">
                          <Cpu className={`w-5 h-5 mr-3 ${
                            darkMode ? 'text-blue-400' : 'text-indigo-600'
                          }`} />
                          <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{tool}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Projects Section */}
        <section className="py-20 px-4 lg:px-8" id="projects">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-16 text-center ${
              darkMode ? '' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text'
            }`}>Featured Projects</h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`rounded-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ${
                    darkMode ? 'bg-gray-800' : 'bg-white'
                  } shadow-xl lg:hover:shadow-2xl`}
                >
                  <div className={`relative pt-8 pb-12 px-4 bg-gradient-to-r  ${project.color}`}>
                    <div className="relative mx-auto w-56 lg:w-42 h-90 rounded-xl bg-black p-1">
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl" />
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    {project.achievement && (
                      <p className={`text-sm mb-3 ${
                        darkMode ? 'text-green-400' : 'text-green-600'
                      }`}>{project.achievement}</p>
                    )}
                    <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                            darkMode 
                              ? 'bg-gray-700 text-gray-300' 
                              : 'bg-indigo-100 text-indigo-800'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-between">
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 font-medium transition-colors ${
                          darkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-indigo-600 hover:text-indigo-800'
                        }`}
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 font-medium transition-colors ${
                          darkMode 
                            ? 'text-blue-400 hover:text-blue-300' 
                            : 'text-indigo-600 hover:text-indigo-800'
                        }`}
                      >
                        <Github className="w-5 h-5" />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className={`min-h-screen transition-colors duration-300 rounded-lg lg:px-8 max-w-7xl mx-auto ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50 text-gray-900 '
      }`}>
  
                  <Book className={`w-10 h-10 mb-4 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`} />
                  <h3 className="text-lg font-semibold mb-2">Continuous Learner</h3>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Always expanding knowledge in cloud and development
                  </p>
              <div>
            <div>
            <div className={`p-8 rounded-xl   ${
              darkMode ? 'bg-gray-700/50 backdrop-blur-lg' : 'bg-white/80 backdrop-blur-sm shadow-xl'
            }`}>
              <h3 className="text-2xl font-bold mb-8">Education & Certifications</h3>
              <div className="space-y-8 lg:space-y-0 lg:space-x-8 lg:flex lg:justify-evenly">
                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-indigo-50'
                }`}>
                  <h4 className="font-semibold text-lg">King Abdulaziz University</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Bachelor of Information Technology
                  </p>
                  <p className={`mt-2 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`}>2021 - Present</p>
                </div>
                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-indigo-50'
                }`}>
                  <h4 className="font-semibold text-lg">The Odin Project</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Professional Certificate in Web Development
                  </p>
                  <p className={`mt-2 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`}>2023 - Present</p>
                </div>
                <div className={`p-6 rounded-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-gradient-to-br from-white to-indigo-50'
                }`}>
                  <h4 className="font-semibold text-lg">AWS Certification</h4>
                  <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
                    Solutions Architect – Associate
                  </p>
                  <p className={`mt-2 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`}>In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      {/* Contact Section */}
      <section className="py-20 px-4 lg:px-8" id="contact">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-4xl font-bold mb-8 ${
            darkMode ? '' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text'
          }`}>Let's Connect</h2>
          <p className={`text-xl mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:Ibrahim.rabehh@gmail.com"
              className={`flex items-center px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-500 hover:to-indigo-500' 
                  : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white'
              }`}
            >
              <Mail className="w-5 h-5 mr-2" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/ibrahim-aljohany-b015ab218/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-8 py-4 rounded-lg font-medium transition-all transform hover:scale-105 ${
                darkMode 
                  ? 'bg-gray-800 text-white hover:bg-gray-700' 
                  : 'bg-white text-indigo-600 shadow-lg hover:shadow-xl'
              }`}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      
    </div>        {/* Contact Section */}
        <section className="py-20 px-4 lg:px-8" id="contact">
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-16 text-center ${
              darkMode ? '' : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-transparent bg-clip-text'
            }`}>Get In Touch</h2>
            
            <div className={`max-w-2xl mx-auto rounded-2xl p-8 ${
              darkMode 
                ? 'bg-gray-800 shadow-xl' 
                : 'bg-white shadow-xl'
            }`}>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:Ibrahim.rabehh@gmail.com" 
                      className={`flex items-center space-x-3 ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                      <span>Ibrahim.rabehh@gmail.com</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/ibrahim-aljohany" 
                      className={`flex items-center space-x-3 ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>ibrahim-aljohany</span>
                    </a>
                    <a 
                      href="https://github.com/ibrahimRabeh" 
                      className={`flex items-center space-x-3 ${
                        darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                      }`}
                    >
                      <Github className="w-5 h-5" />
                      <span>ibrahimRabeh</span>
                    </a>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-4">Current Status</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    Open to freelance opportunities and collaborations. 
                    Feel free to reach out for:
                  </p>
                  <ul className={`mt-4 space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    <li className="flex items-center space-x-2">
                      <Check className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-indigo-600'}`} />
                      <span>Flutter Development Projects</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-indigo-600'}`} />
                      <span>Cloud Solutions Architecture</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <Check className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-indigo-600'}`} />
                      <span>Technical Consulting</span>
                    </li>
                  </ul>
                </div>
              </div>
  
              <div className={`p-4 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-indigo-50'
              }`}>
                <div className="flex items-center space-x-3">
                  <Lightbulb className={`w-6 h-6 ${
                    darkMode ? 'text-blue-400' : 'text-indigo-600'
                  }`} />
                  <p className={`font-medium ${
                    darkMode ? 'text-gray-200' : 'text-gray-900'
                  }`}>
                    Quick Response Time: Usually within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className={`py-8 px-4 lg:px-8 ${
          darkMode ? 'bg-gray-800' : 'bg-gray-200'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
              © {new Date().getFullYear()} Ibrahim.dev. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a 
                href="https://github.com/ibrahimRabeh" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/ibrahim-aljohany" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`transition-colors ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:Ibrahim.rabehh@gmail.com"
                className={`transition-colors ${
                  darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  export default Projects;
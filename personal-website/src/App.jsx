import React, { useState, useEffect } from 'react';
import { ChevronDown, Sparkles, Code, Palette, Mail, MapPin, BookOpen, Heart, Lightbulb } from 'lucide-react';

export default function PersonalWebsite() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [typedText, setTypedText] = useState('');
  const fullText = "Hi there, I'm Maria 👩🏻‍💻🫧🌐";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.message) {
      alert('Message sent! (This is a demo)');
      setFormData({ name: '', email: '', message: '' });
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-slate-500 to-slate-700 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 relative">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
              {typedText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              I'm a Software Engineer passionate about Networks Infrastructure and Distributed Systems. 
            </p>
            <div className="flex gap-4 flex-wrap">
              <button
                onClick={() => scrollToSection('about')}
                className="bg-rose-300 hover:bg-rose-400 text-gray-800 px-6 py-3 rounded-full font-medium transition"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="bg-purple-300 hover:bg-purple-400 text-gray-800 px-6 py-3 rounded-full font-medium transition"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-indigo-300 hover:bg-indigo-400 text-gray-800 px-6 py-3 rounded-full font-medium transition"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-teal-300 hover:bg-teal-400 text-gray-800 px-6 py-3 rounded-full font-medium transition"
              >
                My Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-pink-300 hover:bg-pink-400 text-gray-800 px-6 py-3 rounded-full font-medium transition"
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-84 h-84 bg-gradient-to-br from-pink-200 to-purple-300 rounded-3xl p-4 shadow-2xl">
              <div className="w-full h-full bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}my_pic.png`}
                  alt="Maria" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="w-8 h-8 text-gray-600" />
        </button>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-200 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-rose-400 mx-auto mb-16"></div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-rose-400 transition">
              <div className="flex items-center gap-2 text-rose-300 mb-4">
                <Sparkles className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-gray-400 mb-3">
                I was born in Cali, Colombia 🇨🇴, and moved to the United States in 2014.
              </p>
              <p className="text-gray-400">
                I spent nearly a decade in Baton Rouge, Louisiana 🇺🇸. The culture, food, and music became an important part of my life, and those memories will always stay with me 🐊🎺🎭.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-purple-400 transition">
              <div className="flex items-center gap-2 text-purple-300 mb-4">
                <Palette className="w-5 h-5" />
                <h3 className="text-xl font-semibold">What I Love</h3>
              </div>
              <p className="text-gray-400 mb-2">
                I enjoy British royal history 👑 
              </p>
              <p className="text-gray-400 mb-2">
                Cozy cafes and card gardens ☕🌸
              </p>
              <p className="text-gray-400 mb-2">
                Dogs and Bunnies 🐶🐰
              </p>
              <p className="text-gray-400 mb-2">
                Photography 📸 and LEGO building 🧱
              </p>
              <p className="text-gray-400 mb-2">
                I Love creating Pinterest boards 🎨
              </p>
              <p className="text-gray-400 mb-2">
                I'm a huge football (soccer) fan ⚽️
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-indigo-400 transition">
              <div className="flex items-center gap-2 text-indigo-300 mb-4">
                <Code className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-400 mb-3">
                I am currently completing my final semester of a Bachelor's degree in Computer Science at the University of Notre Dame, with a concentration in Cybersecurity.
              </p>
              <p className="text-gray-400">
                I will be graduating in Spring 2026 and heading to Seattle to start my career in tech at Apple 🍎🌲.
              </p>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-teal-400 transition">
              <div className="flex items-center gap-2 text-teal-300 mb-4">
                <BookOpen className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Favorite Classes</h3>
              </div>
              <p className="text-gray-400">
                My favorite classes have been Computer Networks, Computer Security, and Operating Systems. I enjoy system design and Distributed Systems, and while I've done hundreds of LeetCode questions, I still hate LeetCode.
              </p>
              <div className=" bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}interview.png`}
                  alt="Maria" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-pink-400 transition">
              <div className="flex items-center gap-2 text-pink-300 mb-4">
                <Heart className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Family</h3>
              </div>
              <p className="text-gray-400">
                I love my parents more than anything. I owe everything I have to their strength and hard work.
              </p>
              <div className=" bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}parents.png`}
                  alt="Maria" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-yellow-400 transition">
              <div className="flex items-center gap-2 text-yellow-300 mb-4">
                <Lightbulb className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Advice</h3>
              </div>
              <p className="text-gray-400">
                Dont give up! Everything at some point falls and feels impossible but keep pushing through. You are stronger than you think and you can do hard things.
              </p>
              <div className=" bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden">
                <img 
                  src={`${import.meta.env.BASE_URL}inspo.png`}
                  alt="Maria" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-gradient-to-br from-pink-300 via-slate-500 to-slate-700 text-gray-800 font-sans">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">Skills</h2>
          <p className="text-center text-gray-600 mb-16">
            My toolkit for building robust infrastructure and distributed systems.
          </p>
          
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Programming Languages</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Go', emoji: '🔵', level: 'High Proficiency' },
                { name: 'C/C++', emoji: '⚙️', level: 'High Proficiency' },
                { name: 'Python', emoji: '🐍', level: 'High Proficiency' },
                { name: 'JavaScript', emoji: '🟨', level: 'Experienced' },
                { name: 'HTML/CSS', emoji: '🎨', level: 'Experienced' }
              ].map((skill, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/80 transition shadow-lg">
                  <div className="text-3xl mb-2">{skill.emoji}</div>
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                  <p className="text-xs text-gray-600 mt-1">{skill.level}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Technologies & Tools</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                { name: 'Kubernetes', emoji: '☸️' },
                { name: 'Docker', emoji: '🐳' },
                { name: 'Terraform', emoji: '🏗️' },
                { name: 'Grafana', emoji: '📊' },
                { name: 'Prometheus', emoji: '🔥' },
                { name: 'Git', emoji: '🔀' },
                { name: 'Linux', emoji: '🐧' },
                { name: 'PostgreSQL', emoji: '🐘' },
                { name: 'MySQL', emoji: '🗄️' },
                { name: 'Django', emoji: '🎸' }
              ].map((skill, index) => (
                <div key={index} className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl text-center hover:bg-white/80 transition shadow-lg">
                  <div className="text-3xl mb-2">{skill.emoji}</div>
                  <p className="font-semibold text-gray-800">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-200 mb-16">Projects</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-rose-400 transition">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-rose-500 rounded-lg flex items-center justify-center text-xl">
                  📝
                </div>
                <h3 className="text-xl font-semibold text-gray-200">GopherPad</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Built a secure notes API server using Go with JWT-based user authentication. Used PostgreSQL as a persistent storage layer with GORM for ORM abstraction, supporting a multi-database setup to separate user data from application notes.
              </p>
              <p className="text-gray-400 mb-4">
                Designed and implemented RESTful endpoints for creating, reading, updating notes while focusing on secure password handling (bcrypt), token expiration, and scalable deployment strategies to simulate production-readiness.
              </p>
              <p className="text-sm text-rose-300 mb-4">Tech: GoLang, Docker, PostgreSQL, Splunk</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-purple-400 transition">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center text-xl">
                  🌐
                </div>
                <h3 className="text-xl font-semibold text-gray-200">P2P Distributed System</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Engineered a distributed peer-to-peer system in C/C++ featuring a centralized tracker node that maintains dynamic knowledge of all active network nodes for client discovery and connectivity.
              </p>
              <p className="text-gray-400 mb-4">
                Implemented multithreading and byte-order interoperability, enabling concurrent node-to-node connections and seamless binary data exchange across architectures. Developed a base64-encoded file transfer protocol for efficient data exchange.
              </p>
              <p className="text-sm text-purple-300 mb-4">Tech: C, C++</p>
            </div>

            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-indigo-400 transition">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center text-xl">
                  🖨️
                </div>
                <h3 className="text-xl font-semibold text-gray-200">3D Printer Scheduler</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Leveraged POSIX system calls and threading libraries to manage and dispatch 3D printing jobs on a virtual machine, supporting user-selected scheduling algorithms including FCFS, Priority, SJF, and MLQ.
              </p>
              <p className="text-gray-400 mb-4">
                Designed dynamic job queue structures using singly linked lists to simulate work queues and efficiently assign print tasks to concurrent worker threads with real-time job prioritization and status tracking.
              </p>
              <p className="text-sm text-indigo-300 mb-4">Tech: C Language, POSIX, Multithreading</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gradient-to-br from-rose-300 via-pink-200 to-purple-200">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Experience</h2>
          
          {/* Incoming Position Banner */}
          <div className="mb-12 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-3xl p-1 shadow-xl">
            <div className="bg-white rounded-3xl p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gray-100 rounded-2xl p-2 shadow-md flex-shrink-0">
                  <img 
                    src="/apple_logo.png" 
                    alt="Apple" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-3 py-1 bg-rose-100 text-rose-600 rounded-full text-sm font-semibold">
                      Incoming 2026
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">Software Engineer</h3>
                  <p className="text-gray-600 font-medium">Apple — Seattle, Washington</p>
                  <p className="text-gray-500 text-sm">Private Cloud Compute Team</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-rose-500 rounded-full"></div>
                <div className="w-0.5 h-full bg-rose-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-lg flex-shrink-0">
                    <img 
                      src="/apple_logo.png" 
                      alt="Apple" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">Security Software Engineer Intern</h3>
                    <p className="text-gray-600 mb-1">Apple — Seattle, Washington</p>
                    <p className="text-sm text-gray-500">May 2025 - August 2025</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Led migration from IS-Cloud to Apple's internal Kubernetes platform by containerizing services, setting up deployment environments, and transitioning all dependencies and workloads.</li>
                  <li>• Strengthened security and reliability by enhancing JWT authentication, encrypted protocols, Kubernetes secrets, cryptographic methods, and certificate/SSH key management with automated rotation.</li>
                  <li>• Improved service observability and resiliency through structured logging, custom metrics, and integrations with Splunk, Grafana, and Mosaic, culminating in a final project presentation to Apple's Service Engineering Leaders.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="w-0.5 h-full bg-purple-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-lg flex-shrink-0">
                    <img 
                      src="/honeywell_logo.png" 
                      alt="Honeywell" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">Software Engineer Intern</h3>
                    <p className="text-gray-600 mb-1">Honeywell Technologies — Atlanta, Georgia</p>
                    <p className="text-sm text-gray-500">May 2024 - August 2024</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Contributed and led the development of a full stack Web Hosted User Interface (UI) using Electron.js aimed at enhancing and simplifying engineers' visibility of Honeywell's Pro-Watch security system.</li>
                  <li>• Implemented REST APIs to derive and store meaningful database inputs from MySQL as well as applying data science skills with Python libraries such as Pandas and NumPy to extract and analyze extensive datasets.</li>
                  <li>• Collaborated with Honeywell engineers to employ a regressive ML model to improve the data qualification as we developed regional models for the Pro-Watch system.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                <div className="w-0.5 h-full bg-indigo-300 mt-2"></div>
              </div>
              <div className="flex-1 pb-12">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-lg flex-shrink-0">
                    <img 
                      src="/s2e_logo.png" 
                      alt="S2E Lab" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">Student Research</h3>
                    <p className="text-gray-600 mb-1">Security and Software Engineering (S2E) Lab — South Bend, IN</p>
                    <p className="text-sm text-gray-500">August 2024 - Present</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Conducted research on the security capabilities of Large Language Models (LLMs), such as ChatGPT and Gemini, using Python for data analysis (Pandas) and machine learning platforms (Hugging Face, OpenAI).</li>
                  <li>• Developed RESTful API requests to interface with GPT and Gemini models and evaluate their performance in security-related tasks.</li>
                  <li>• Built web scrapers to supply LLMs with relevant data and analyze the output by parsing CSVs to compare responses.</li>
                </ul>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 bg-teal-500 rounded-full"></div>
              </div>
              <div className="flex-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-white rounded-2xl p-2 shadow-lg flex-shrink-0">
                    <img 
                      src="/ndbridge_logo.png" 
                      alt="NDBridge" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-1">Data Science Intern</h3>
                    <p className="text-gray-600 mb-1">NDBridge Casa Pueblo Energies — Adjuntas, Puerto Rico</p>
                    <p className="text-sm text-gray-500">May 2023 - August 2023</p>
                  </div>
                </div>
                <ul className="text-gray-700 space-y-2">
                  <li>• Engineered a Python-based data analytics workflow (Pandas, NumPy) to process aerial drone data collected over solar panel installations, enabling identification of peak energy production periods and underperforming sites.</li>
                  <li>• Performed large-scale data extraction, cleaning, and feature analysis on geospatial and time-series datasets using Scrapy, Pandas, and OpenRefine to support data-driven decision-making for a renewable energy nonprofit in Puerto Rico.</li>
                  <li>• Built advanced visualizations with Matplotlib and Seaborn to analyze system performance trends and inform resource allocation strategies for maximizing environmental and community impact.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen bg-gray-900 py-20 px-4 flex items-center">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold text-center text-rose-300 mb-4">Let's Bloom Together</h2>
          <p className="text-center text-gray-400 mb-12">Drop a message to brighten my day 🌸</p>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-rose-400"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-rose-400"
                />
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 focus:outline-none focus:border-rose-400"
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="w-full bg-rose-400 hover:bg-rose-500 text-white py-3 rounded-lg font-semibold transition"
                >
                  Send Some Sunshine
                </button>
              </div>
              <p className="text-center text-rose-300 text-sm mt-4">
                💌 I can't wait to meet my share ⚡ of extra creativity
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-6 h-6 text-rose-400" />
                <div>
                  <p className="font-semibold">Email:</p>
                  <p className="text-gray-400">ananyakaduskar1@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-6 h-6 text-rose-400" />
                <div>
                  <p className="font-semibold">Location:</p>
                  <p className="text-gray-400">Pune Nagar, Maharena, Madhya Pradesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-rose-400 hover:bg-rose-500 text-white p-4 rounded-full shadow-lg transition z-50"
      >
        ↑
      </button>
    </div>
  );
}
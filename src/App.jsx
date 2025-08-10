import React from "react";
import { Mail, Download, ExternalLink } from "lucide-react";

export default function App() {
  const projects = [
    {
      title: "Guess the Number",
      date: "May 2024 - Jun 2024",
      desc: "Interactive web game with dynamic user feedback and clean UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kiransai-5C5/GUESS_NUMBER",
    },
    {
      title: "TinDog Website",
      date: "Apr 2024 - May 2024",
      desc: "Responsive landing page built with Bootstrap showcasing components and layout skills.",
      tech: ["Bootstrap", "HTML", "CSS"],
      link: "https://github.com/kiransai-5C5/TinDog_Website",
    },
    {
      title: "Temperature Converter",
      date: "2024",
      desc: "Web app to convert temperatures between Celsius, Fahrenheit, and Kelvin.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kiransai-5C5/TEMPERATURE_CONVERTOR",
    },
    {
      title: "Tic Tac Toe Game",
      date: "2024",
      desc: "Browser-based Tic Tac Toe game with basic AI logic.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/kiransai-5C5/TIC_TAC_TOE_GAME",
    },
    {
      title: "Bharat Kisan Setu",
      date: "Mar 2024 - Present",
      desc: "Farmer-consumer connection app concept to remove middlemen.",
      tech: ["React", "Node.js", "SQL", "HTML", "CSS", "JavaScript"],
      link: "#",
    },
  ];

  const skills = [
    "HTML", "CSS", "JavaScript", "Bootstrap", "React", "Python", "Java", "DSA", "SQL (basic)", "VS Code", "GitHub"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-red-900 to-gray-900 text-white">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-black font-bold">KS</div>
          <div>
            <h1 className="text-xl font-semibold">Kovvuru Kiran Sai</h1>
            <p className="text-sm text-red-200">Aspiring Full-Stack Developer</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-4 text-sm">
          <a href="#projects" className="hover:text-red-400">Projects</a>
          <a href="#skills" className="hover:text-red-400">Skills</a>
          <a href="#contact" className="hover:text-red-400">Contact</a>
          <a href="/resume.pdf" download className="ml-3 inline-flex items-center gap-2 bg-red-500 px-3 py-1 rounded-lg text-black font-medium">
            <Download size={14} /> Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="max-w-6xl mx-auto px-6 pb-16">
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <h2 className="text-4xl md:text-5xl font-extrabold">Hi, I’m <span className="text-red-400">Kiran Sai</span> — I build responsive, beautiful web apps.</h2>
            <p className="mt-4 text-gray-300">Frontend-focused developer with strong problem-solving skills and a passion for creating intuitive UIs. Learning backend to become full-stack.</p>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h3 className="text-2xl font-bold">Projects</h3>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {projects.map((p) => (
              <article key={p.title} className="p-4 rounded-xl bg-black/30 border border-red-700 hover:scale-[1.01] transition">
                <h4 className="font-semibold text-lg">{p.title}</h4>
                <div className="text-xs text-red-300">{p.date}</div>
                <p className="mt-3 text-gray-300 text-sm">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sm border border-red-500 px-3 py-1 rounded-lg">
                  <ExternalLink size={14} /> View
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h3 className="text-xl font-semibold">Skills</h3>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {skills.map(s => (
              <div key={s} className="text-sm bg-black/40 px-3 py-2 rounded-md">{s}</div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12">
          <h3 className="text-xl font-semibold">Contact Me</h3>
          <form action="https://formspree.io/f/xgvzrloj" method="POST" className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required className="p-3 rounded-md bg-black/40 border border-red-500" placeholder="Your name" />
            <input name="email" type="email" required className="p-3 rounded-md bg-black/40 border border-red-500" placeholder="Your email" />
            <input name="subject" className="md:col-span-2 p-3 rounded-md bg-black/40 border border-red-500" placeholder="Subject" />
            <textarea name="message" required className="md:col-span-2 p-3 rounded-md bg-black/40 border border-red-500 h-32" placeholder="Write your message..."></textarea>
            <button type="submit" className="md:col-span-2 inline-flex items-center gap-2 justify-center px-4 py-3 rounded-lg bg-red-500 text-black font-semibold">
              <Mail size={16} /> Send Message
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

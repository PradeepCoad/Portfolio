import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import myResume from './assets/PradeepVermaResume2025.pdf'

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20">
      {/* 🔹 Particles Background */}
      <div id="particles-js" className="absolute inset-0 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-1 gap-12 items-center">
          <div className="text-center lg:text-center">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
              Available for new opportunities
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                Pradeep Verma
              </span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Full Stack Developer who loves creating smart, user-friendly web apps powered by modern tech and AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
                <a href='https://github.com/pradeepcoad' target='_blank'>View My Work</a>
              </button>
              <button className="border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-lg font-medium hover:border-blue-600 hover:text-blue-600 transition-colors duration-200">
                <a href={myResume} download="PradeepVermaResume.pdf"  media={myResume}>Download Resume</a>
              </button>
            </div>
            <div className="flex justify-center lg:justify-center space-x-4">
              <a href="https://github.com/pradeepcoad" target='_blank' className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-blue-600">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pradeep-verma-28630a253/" target='_blank' className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-blue-600">
                <Linkedin size={20} />
              </a>
              <a href="mailto:pradeepverma156p@gmail.com" target='_blank' className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-200 hover:text-blue-600">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 text-slate-600 hover:text-blue-600 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
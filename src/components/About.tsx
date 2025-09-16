import React from 'react';
import { Code, Palette, Server, Smartphone } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Tailwind CSS, Next.js',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Node.js, Express, PostgreSQL, MongoDB',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Palette size={24} />,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Development',
      description: 'React Native, Flutter, Progressive Web Apps',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '20+', label: 'Happy Clients' },
    { number: '100%', label: 'Success Rate' }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate full stack developer with a keen eye for design and a love for clean, 
            efficient code. I enjoy turning complex problems into simple, beautiful solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              With over 3 years of experience in web development, I've had the privilege of working 
              with startups and established companies to bring their digital visions to life. My 
              background in both design and development allows me to bridge the gap between beautiful 
              interfaces and robust functionality.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I'm constantly learning and staying up-to-date with the latest technologies and best 
              practices. When I'm not coding, you can find me contributing to open source projects 
              or mentoring aspiring developers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-slate-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Skills & Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                <h4 className="text-lg font-semibold text-slate-900 mb-2">{skill.title}</h4>
                <p className="text-slate-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
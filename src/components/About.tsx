import React from 'react';
import { Code, Palette, Server, Smartphone, Calendar, GraduationCap } from 'lucide-react';

export default function About() {
  // const skills = [
  //   {
  //     icon: <Code size={24} />,
  //     title: 'Frontend Development',
  //     description: 'React, TypeScript, Tailwind CSS, Html5, Boots',
  //     color: 'from-blue-500 to-blue-600'
  //   },
  //   {
  //     icon: <Server size={24} />,
  //     title: 'Backend Development',
  //     description: 'Node.js, Express, PostgreSQL, MongoDB',
  //     color: 'from-green-500 to-green-600'
  //   },
  //   {
  //     icon: <Palette size={24} />,
  //     title: 'UI/UX Design',
  //     description: 'Figma, Adobe XD, Responsive Design',
  //     color: 'from-purple-500 to-purple-600'
  //   },
  //   {
  //     icon: <Smartphone size={24} />,
  //     title: 'Mobile Development',
  //     description: 'React Native, Flutter, Progressive Web Apps',
  //     color: 'from-orange-500 to-orange-600'
  //   }
  // ];

  const skills = [
{
icon: <Code size={24} />,
title: 'Frontend Development',
description: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
color: 'from-blue-500 to-blue-600'
},
{
icon: <Server size={24} />,
title: 'Backend Development',
description: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB'],
color: 'from-green-500 to-green-600'
},
{
icon: <Palette size={24} />,
title: 'UI/UX Design',
description: ['Figma', 'Adobe XD', 'Responsive Design'],
color: 'from-purple-500 to-purple-600'
},
{
icon: <Smartphone size={24} />,
title: 'Mobile Development',
description: ['React Native', 'Flutter', 'Progressive Web Apps'],
color: 'from-orange-500 to-orange-600'
}
];
  const acadmicTimeline = [
    {
      year: 'Now',
      range: '2025',
      title: 'Masters in Computer Application specialization in Artificial Intelligence',
      place: 'Gautam Buddha University',
      desc: 'Currently pursuing MCA with a focus on Artificial Intelligence, studying core computer science subjects and developing academic projects in web and mobile development.',
      icon: <GraduationCap size={18} />
    },
    {
      year: "Completed",
      range: '6 Months',
      title: "Certifiication in Data Science",
      place: 'GrashTech Noida',
      desc: 'Certified in Data Science with skills in data analysis, visualization, and machine learning, backed by project experience.',
      icon: <GraduationCap size={18} />
    },
    {
      year: 'Completed',
      range: '2022-2025',
      title: 'Bachelor in Computer Applications',
      place: 'Greater Noida Institute Of Technology, Greater',
      desc: 'I’ve completed my BCA, where I built a solid base in computer science and worked on academic projects in web and mobile development.',
      icon: <GraduationCap size={18} />
    },
    {
      year: 'Completed',
      range: '2021-2022',
      title: 'Senior Secondary School',
      place: 'K.C. International School, Greater Noida',
      desc: 'Completed 12th standard with a focus on Computer and Science subjects .',
      icon: <Calendar size={18} />
    }
  ];

  const workingTimeline = [
    {
      year: 'Now',
      range: '2025',
      title: 'Open to Opportunities',
      place: 'Looking for Junior / Entry-level roles',
      desc: 'Focusing on problem solving, interview prep, and contributing to teams. Ready to learn and grow.',
      icon: <Server size={18} />
    },
    {
      year: 'Now',
      range: '2025-2027',
      title: 'Masters in Computer Application specialization in Artificial Intelligence',
      place: 'Gautam Buddha University',
      desc: 'Studing advance computer science subjects; built academic projects in web and mobile development and integrating AI.',
      icon: <GraduationCap size={18} />
    },
    {
      year: 'Projects & Internships',
      range: 'Year–Year',
      title: 'Academic & Personal Projects',
      place: 'Self / Internships',
      desc: 'Built multiple projects (chat app, file uploader, restaurant ordering system) and contributed to open-source or internship tasks.',
      icon: <Code size={18} />
    },
    {
      year: 'BCA / B.Sc / Degree',
      range: 'Year–Year',
      title: 'Bachelor in Computer Applications',
      place: 'Your College / University',
      desc: 'Studied core computer science subjects; built academic projects in web and mobile development.',
      icon: <GraduationCap size={18} />
    },
    {
      year: "Diploma / +2 / Foundation",
      range: 'Year',
      title: "(Optional) Diploma or Bridge Course",
      place: 'Institute Name (if any)',
      desc: 'Any short courses or certifications you did after 12th (optional).',
      icon: <GraduationCap size={18} />
    },
    {
      year: 'Class 12',
      range: 'Year',
      title: 'Senior Secondary School',
      place: 'Your School Name',
      desc: 'Completed 12th standard with a focus on Computer/Science subjects. Participated in coding club and inter-school tech events.',
      icon: <Calendar size={18} />
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            I'm a passionate fresher full stack developer who loves building web and mobile applications. I enjoy learning new
            technologies and creating clean, user-friendly solutions.
          </p>
        </div>

        {/* Timeline + Stats */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Timeline column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">My Journey</h3>

            <div className="relative pl-8">
              {/* Vertical line */}
              <div className="absolute left-4 top-2 bottom-0 w-0.5 bg-slate-200"></div>

              <ol className="space-y-8">
                {acadmicTimeline.map((item, idx) => (
                  <li key={idx} className="relative">
                    <div className="absolute -left-1.5 top-0 w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                      <div className={`inline-flex p-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-200`}>
                        {item.icon}
                      </div>
                    </div>

                    <div className="ml-8 p-6 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="text-sm text-slate-500 font-medium">{item.year} <span className="text-slate-400">• {item.range}</span></div>
                          <h4 className="text-lg font-semibold text-slate-900 mt-1">{item.title}</h4>
                          <div className="text-sm text-slate-500 font-medium mt-1">{item.place}</div>
                        </div>
                      </div>
                      <p className="text-slate-600 mt-4 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Stats + Skills column */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-slate-600 font-medium">Academic Projects</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">Open</div>
                <div className="text-slate-600 font-medium">To Opportunities</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-slate-600 font-medium">Learning Dedication</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                <div className="text-slate-600 font-medium">Growth Potential</div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Skills & Expertise</h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group p-4 bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${skill.color} text-white mb-3 group-hover:scale-105 transition-transform duration-300`}>{skill.icon}</div>
                  <h4 className="text-md font-semibold text-slate-900 mb-3">{skill.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.description.map((desc, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-medium hover:bg-slate-200 transition"
                      >
                        {desc}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
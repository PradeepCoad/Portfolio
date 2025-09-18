import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Select Zone',
      description: "It's an ASP.NET Core web application that allows users to upload files from their local system.",
      image: 'https://pmecdn.protonweb.com/image-transformation/?s=c&image=images%2Ff_auto%2Cq_auto%2Fv1707565243%2Fwp-pme%2Fsecure-file-sharing%2Fsecure-file-sharing.png%3F_i%3DAA&width=2352&height=1176',
      tags: ['C#','Asp.Net Core','JQuery','PostgreSQL'],
      liveUrl: '#',
      githubUrl: 'https://github.com/PradeepCoad/SelectZone',
      featured: true
    },
    {
      title: 'Quiz App',
      description: 'An Quiz Application which is powered by Firebase for Questions and Answers.',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600',
      tags: ['Android','Java','Firebase','Material UI'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for creating 
            innovative web solutions.
          </p>
        </div>


        <div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                // key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-slate-900 mb-2">{project.title}</h4>
                  <p className="text-slate-600 text-sm mb-3 line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-3">
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={14} className="mr-1" />
                        Live
                      </a>
                    )}

                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        className="flex items-center text-slate-600 hover:text-slate-700 text-sm font-medium transition-colors duration-200"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={14} className="mr-1" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
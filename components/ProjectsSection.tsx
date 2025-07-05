'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, BarChart3, Gamepad2, Brain, TrendingUp } from 'lucide-react'
import Image from 'next/image'

const projectsData = [
  {
    id: 'openlap',
    title: 'OpenLAP Visual Analytics Platform',
    description: 'An open-source learning analytics platform with customizable visualizations for educational data analysis. Led frontend development, API integration, and Kanban coordination for a team of 7.',
    techStack: ['JavaScript', 'Java', 'HTML', 'CSS', 'Git', 'Kanban'],
    image: '/images/openlap-project.svg',
    githubUrl: 'https://github.com/im-kaustubh/idea-project',
    demoUrl: null,
    teamSize: '7 members',
    role: 'Frontend Developer & Kanban Coordinator',
    metrics: {
      team: '7 members',
      type: 'Open Source',
      platform: 'Web App'
    }
  },
  {
    id: 'silent-spray',
    title: 'Silent Spray - Stealth Game',
    description: 'A 2D stealth action game with graffiti mechanics, AI logic, and scene transitions. Served as technical lead and project manager for a team of 4 developers.',
    techStack: ['C#', 'Unity', 'ShaderLab', 'HLSL', 'Git', 'Kanban'],
    image: '/images/silent-spray-project.svg',
    githubUrl: 'https://github.com/im-kaustubh/Silent_Spray_new',
    demoUrl: null,
    teamSize: '4 members',
    role: 'Technical Lead & Project Manager',
    metrics: {
      team: '4 members',
      type: 'Game Dev',
      platform: 'Unity'
    }
  },
  {
    id: 'neurocompass',
    title: 'NeuroCompass - Course Recommendation System',
    description: 'A web platform for recommending study programs based on user preferences and data analysis. Worked on backend logic and data integration for a team of 6.',
    techStack: ['Python', 'TypeScript', 'Jupyter Notebook', 'HTML', 'CSS', 'JavaScript'],
    image: '/images/neurocompass-project.svg',
    githubUrl: 'https://github.com/moharamfatema/neurocompass-website',
    demoUrl: null,
    teamSize: '6 members',
    role: 'Backend Developer',
    metrics: {
      team: '6 members',
      type: 'Web App',
      platform: 'Python/TS'
    }
  },
  {
    id: 'equipulse',
    title: 'EquiPulse - Stock Trend Analysis',
    description: 'A tool for analyzing stock market trends based on patterns and macroeconomic indicators. Individual project that achieved 5x return on investment through algorithmic trading strategies.',
    techStack: ['Python', 'yfinance', 'pandas', 'scikit-learn'],
    image: '/images/equipulse-project.svg',
    githubUrl: null,
    demoUrl: null,
    teamSize: 'Individual',
    role: 'Full Stack Developer',
    metrics: {
      roi: '5x Return',
      type: 'Trading Tool',
      platform: 'Python'
    }
  }
]

export function ProjectsSection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding bg-surface/20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projectsData.map((project, index) => (
              <motion.div
                key={project.id}
                className="glass-effect rounded-2xl overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  
                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {project.id === 'openlap' && <BarChart3 size={12} className="inline mr-1" />}
                    {project.id === 'silent-spray' && <Gamepad2 size={12} className="inline mr-1" />}
                    {project.id === 'neurocompass' && <Brain size={12} className="inline mr-1" />}
                    {project.id === 'equipulse' && <TrendingUp size={12} className="inline mr-1" />}
                    {project.id === 'openlap' && 'Analytics'}
                    {project.id === 'silent-spray' && 'Game Dev'}
                    {project.id === 'neurocompass' && 'Web App'}
                    {project.id === 'equipulse' && 'Trading'}
                  </div>
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-text-primary">
                    {project.title}
                  </h3>
                  
                  <p className="text-text-secondary text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-2 bg-surface/50 rounded">
                        <div className="text-xs font-bold text-primary">{value}</div>
                        <div className="text-xs text-text-muted capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Team Size:</span>
                      <span>{project.teamSize}</span>
                    </div>
                    <div className="flex justify-between text-xs text-text-muted">
                      <span>Role:</span>
                      <span>{project.role}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-surface hover:bg-surface/80 text-text-primary rounded-lg transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        GitHub
                      </motion.a>
                    )}
                    
                    {project.demoUrl && (
                      <motion.a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2 px-4 bg-primary hover:bg-primary/90 text-white rounded-lg transition-colors text-sm"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { 
  FaPython, 
  FaJs, 
  FaNodeJs, 
  FaJava, 
  FaDatabase, 
  FaGithub, 
  FaGitAlt,
  FaChartBar,
  FaFileExcel,
  FaFileWord,
  FaFilePowerpoint,
  FaGamepad,
  FaUsers,
  FaProjectDiagram,
  FaMicrophone,
  FaPuzzlePiece,
  FaGlobe,
  FaLink
} from 'react-icons/fa'
import { SiMongodb } from 'react-icons/si'

const skillsData = {
  programming: [
    { name: 'Python', level: 90, icon: FaPython },
    { name: 'JavaScript', level: 85, icon: FaJs },
    { name: 'Node.js', level: 80, icon: FaNodeJs },
    { name: 'C#', level: 75, icon: FaJava },
    { name: 'Java', level: 70, icon: FaJava },
  ],
  databases: [
    { name: 'SQL', level: 85, icon: FaDatabase },
    { name: 'MongoDB', level: 80, icon: SiMongodb },
    { name: 'REST APIs', level: 90, icon: FaLink },
    { name: 'Git', level: 95, icon: FaGitAlt },
    { name: 'GitHub', level: 90, icon: FaGithub },
  ],
  tools: [
    { name: 'Power BI', level: 80, icon: FaChartBar },
    { name: 'Microsoft Excel', level: 85, icon: FaFileExcel },
    { name: 'Word', level: 90, icon: FaFileWord },
    { name: 'PowerPoint', level: 85, icon: FaFilePowerpoint },
    { name: 'Unity', level: 75, icon: FaGamepad },
  ],
  soft_skills: [
    { name: 'Team Leadership', level: 90, icon: FaUsers },
    { name: 'Project Management', level: 85, icon: FaProjectDiagram },
    { name: 'Public Speaking', level: 80, icon: FaMicrophone },
    { name: 'Problem Solving', level: 95, icon: FaPuzzlePiece },
    { name: 'Cross-cultural Communication', level: 90, icon: FaGlobe },
  ]
}

export function SkillsSection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 font-latex tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Technical Skills & Expertise
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Programming Languages */}
            <motion.div
              className="glass-effect rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary font-latex-sans tracking-wide">
                Programming
              </h3>
              <div className="space-y-4">
                {skillsData.programming.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2">
                          <IconComponent className="text-lg text-primary" />
                          <span className="text-sm font-medium font-latex-sans">{skill.name}</span>
                        </span>
                        <span className="text-xs text-text-muted font-latex-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Databases & Tools */}
            <motion.div
              className="glass-effect rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-secondary font-latex-sans tracking-wide">
                Databases & Tools
              </h3>
              <div className="space-y-4">
                {skillsData.databases.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2">
                          <IconComponent className="text-lg text-secondary" />
                          <span className="text-sm font-medium font-latex-sans">{skill.name}</span>
                        </span>
                        <span className="text-xs text-text-muted font-latex-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-secondary to-accent h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1.0 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Business Tools */}
            <motion.div
              className="glass-effect rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-accent font-latex-sans tracking-wide">
                Business Tools
              </h3>
              <div className="space-y-4">
                {skillsData.tools.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2">
                          <IconComponent className="text-lg text-accent" />
                          <span className="text-sm font-medium font-latex-sans">{skill.name}</span>
                        </span>
                        <span className="text-xs text-text-muted font-latex-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-accent to-primary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1.2 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              className="glass-effect rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary font-latex-sans tracking-wide">
                Leadership
              </h3>
              <div className="space-y-4">
                {skillsData.soft_skills.map((skill, index) => {
                  const IconComponent = skill.icon
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="flex items-center gap-2">
                          <IconComponent className="text-lg text-primary" />
                          <span className="text-sm font-medium font-latex-sans">{skill.name}</span>
                        </span>
                        <span className="text-xs text-text-muted font-latex-mono">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-surface rounded-full h-2">
                        <motion.div
                          className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: 1.4 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
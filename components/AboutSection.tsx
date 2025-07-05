'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { Brain, Database, TrendingUp, Code } from 'lucide-react'

export function AboutSection() {
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
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('about.title')}
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg text-text-secondary leading-relaxed">
                I'm a passionate Computer Engineering student with a strong foundation in software development and problem-solving. My academic journey has equipped me with both theoretical knowledge and practical skills in building innovative solutions and analyzing complex systems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary">
                    <strong>Software Development:</strong> Full-stack development, system architecture, and scalable solutions
                  </p>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary">
                    <strong>Problem Solving:</strong> Analytical thinking, algorithm design, and optimization techniques
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <p className="text-text-secondary">
                    <strong>System Design:</strong> Database design, API development, and infrastructure management
                  </p>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-sm text-text-muted">Team Roles</div>
                </div>
                <div className="text-center p-4 bg-surface/50 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">25+</div>
                  <div className="text-sm text-text-muted">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Visual element */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center space-y-6">
                  {/* Technical Icons */}
                  <div className="flex justify-center gap-4">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                      <Code size={24} className="text-primary" />
                    </div>
                    <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                      <Database size={24} className="text-secondary" />
                    </div>
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <TrendingUp size={24} className="text-accent" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                    <p className="text-text-secondary text-sm">Development • Analysis • Innovation</p>
                  </div>
                  
                  {/* Mini Chart */}
                  <div className="flex items-end justify-center gap-1 h-16">
                    <div className="w-3 bg-primary rounded-t" style={{ height: '60%' }}></div>
                    <div className="w-3 bg-secondary rounded-t" style={{ height: '80%' }}></div>
                    <div className="w-3 bg-accent rounded-t" style={{ height: '40%' }}></div>
                    <div className="w-3 bg-primary rounded-t" style={{ height: '90%' }}></div>
                    <div className="w-3 bg-secondary rounded-t" style={{ height: '70%' }}></div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full"
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary/30 rounded-full"
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'

const languagesData = [
  {
    name: 'English',
    level: 95,
    proficiency: 'C1/C2 - Professional',
    flag: '🇺🇸'
  },
  {
    name: 'German',
    level: 75,
    proficiency: 'B2 - Intermediate',
    flag: '🇩🇪'
  },
  {
    name: 'Hindi',
    level: 100,
    proficiency: 'Native',
    flag: '🇮🇳'
  },
  {
    name: 'Marathi',
    level: 100,
    proficiency: 'Native',
    flag: '🇮🇳'
  }
]

export function LanguagesSection() {
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
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('languages.title')}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {languagesData.map((language, index) => (
              <motion.div
                key={language.name}
                className="glass-effect rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-3xl">{language.flag}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-text-primary">
                      {language.name}
                    </h3>
                    <p className="text-sm text-text-muted">
                      {language.proficiency}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Proficiency</span>
                    <span className="text-text-muted">{language.level}%</span>
                  </div>
                  
                  <div className="w-full bg-surface rounded-full h-3">
                    <motion.div
                      className="bg-gradient-to-r from-primary to-secondary h-3 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${language.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional info */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-text-secondary max-w-2xl mx-auto">
              Fluent in multiple languages, enabling effective communication in diverse international environments. 
              Experienced in cross-cultural collaboration and global team coordination.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
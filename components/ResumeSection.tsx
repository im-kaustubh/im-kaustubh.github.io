'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { Download } from 'lucide-react'

export function ResumeSection() {
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
          className="max-w-2xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('resume.title')}
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Download my detailed resume to learn more about my experience, skills, and achievements in Computer Engineering and software development.
          </motion.p>

          <motion.a
            href="/Resume_Kaustubh.pdf"
            download
            className="btn-primary flex items-center justify-center gap-2 mx-auto w-fit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download size={20} />
            {t('resume.download')}
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
} 
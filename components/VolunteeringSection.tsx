'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { Users, Globe, Heart } from 'lucide-react'

const volunteeringData = [
  {
    title: 'Language Guide',
    organization: 'Studierendenwerk Duisburg-Essen',
    period: '2023–2024',
    description: 'Supporting international students at events and language integration (German–English).',
    icon: Users,
    color: 'text-primary'
  },
  {
    title: 'Liaison Officer',
    organization: 'International Folklore Festival, Chandigarh University',
    period: '2018',
    description: 'Coordinated Team Singapore, organized logistics and cultural exchange.',
    icon: Globe,
    color: 'text-secondary'
  },
  {
    title: 'Fundraiser',
    organization: 'HelpAge India Campaigns',
    period: '2006–2016',
    description: 'Annual fundraising collections from Class 1 to 10 to support elderly people.',
    icon: Heart,
    color: 'text-accent'
  }
]

export function VolunteeringSection() {
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
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Volunteering & Community Service
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {volunteeringData.map((item, index) => (
              <motion.div
                key={item.title}
                className="glass-effect rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-surface/50 rounded-full flex items-center justify-center ${item.color}`}>
                  <item.icon size={32} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                  {item.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-1">
                  {item.organization}
                </p>
                
                <p className="text-xs text-text-muted mb-4">
                  {item.period}
                </p>
                
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
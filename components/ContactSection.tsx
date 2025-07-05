'use client'

import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, MessageSquare, Download, Globe, Send } from 'lucide-react'

export function ContactSection() {
  const { t } = useLanguage()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kaustubhbarbudhe@gmail.com',
      href: 'mailto:kaustubhbarbudhe@gmail.com',
      color: 'text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/imkaustubh',
      href: 'https://linkedin.com/in/imkaustubh',
      color: 'text-blue-500'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/im-kaustubh',
      href: 'https://github.com/im-kaustubh',
      color: 'text-gray-400'
    },
    {
      icon: Globe,
      label: 'Website',
      value: 'im-kaustubh.github.io',
      href: 'https://im-kaustubh.github.io',
      color: 'text-blue-600'
    }
  ]

  const handleContactClick = () => {
    const subject = encodeURIComponent('Portfolio Contact - Let\'s Connect!')
    const body = encodeURIComponent(`Hi Kaustubh,

I came across your portfolio and would like to connect with you regarding:

[Your message here]

Best regards,
[Your name]`)
    
    window.open(`mailto:kaustubhbarbudhe@gmail.com?subject=${subject}&body=${body}`, '_blank')
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Let's Connect & Collaborate
          </motion.h2>

          <motion.p
            className="text-lg text-text-secondary text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I'm always interested in discussing software development opportunities, project collaborations, and innovative technical solutions. Let's explore how we can work together to build impactful projects.
          </motion.p>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 glass-effect rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-text-primary">
                Send me a message
              </h3>
              
              <div className="space-y-6">
                <div className="text-center p-8 bg-surface/20 rounded-xl border border-text-muted/20">
                  <MessageSquare size={48} className="mx-auto mb-4 text-primary" />
                  <h4 className="text-xl font-semibold mb-2 text-text-primary">
                    Ready to Connect?
                  </h4>
                  <p className="text-text-secondary mb-6">
                    Click the button below to open your email client and send me a message directly.
                  </p>
                  <motion.button
                    onClick={handleContactClick}
                    className="btn-primary flex items-center justify-center gap-2 mx-auto"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Mail size={20} />
                    Send Email
                  </motion.button>
                </div>

                <div className="text-center text-sm text-text-muted">
                  <p>Or reach out directly at: <a href="mailto:kaustubhbarbudhe@gmail.com" className="text-primary hover:underline">kaustubhbarbudhe@gmail.com</a></p>
                </div>
              </div>
            </motion.div>

            {/* Contact Info & Quick Actions */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
              
              {contactInfo.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-surface/50 transition-colors group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`p-3 rounded-lg bg-surface/50 group-hover:bg-surface/80 transition-colors ${contact.color}`}>
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">{contact.label}</div>
                    <div className="text-sm text-text-secondary">{contact.value}</div>
                  </div>
                </motion.a>
              ))}

              <div className="pt-6">
                <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
                
                <motion.a
                  href="/Resume_Kaustubh.pdf"
                  download
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-surface/50 transition-colors group mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-surface/50 group-hover:bg-surface/80 transition-colors text-green-500">
                    <Download size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Download Resume</div>
                    <div className="text-sm text-text-secondary">PDF format</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/imkaustubh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-surface/50 transition-colors group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-surface/50 group-hover:bg-surface/80 transition-colors text-blue-500">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Connect on LinkedIn</div>
                    <div className="text-sm text-text-secondary">Professional network</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
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
              
              <form
                action="https://formspree.io/f/YOUR_FORM_ID"
                method="POST"
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-secondary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-surface border border-text-muted/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary flex items-center justify-center gap-2 w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={20} />
                  Send Message
                </motion.button>
              </form>
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
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-surface/50 transition-colors group mb-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.4 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-surface/50 group-hover:bg-surface/80 transition-colors text-primary">
                    <Download size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">Download Resume</div>
                    <div className="text-sm text-text-secondary">PDF format</div>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/im-kaustubh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 glass-effect rounded-xl hover:bg-surface/50 transition-colors group"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1.5 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-3 rounded-lg bg-surface/50 group-hover:bg-surface/80 transition-colors text-accent">
                    <Github size={20} />
                  </div>
                  <div>
                    <div className="font-medium text-text-primary">View Projects</div>
                    <div className="text-sm text-text-secondary">GitHub portfolio</div>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>

          {/* Availability Status */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-500 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Available for Software Development Opportunities
            </div>
            <p className="text-text-muted text-sm mt-2">
              Currently accepting freelance projects, collaborations, and full-time opportunities
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 
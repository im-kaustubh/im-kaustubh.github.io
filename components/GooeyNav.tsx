'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

const navItems = [
  { id: 'home', label: 'nav.home' },
  { id: 'about', label: 'nav.about' },
  { id: 'skills', label: 'nav.skills' },
  { id: 'projects', label: 'nav.projects' },
  { id: 'resume', label: 'nav.resume' },
  { id: 'volunteering', label: 'nav.volunteering' },
  { id: 'languages', label: 'nav.languages' },
  { id: 'contact', label: 'nav.contact' },
]

export function GooeyNav() {
  const { t, language, setLanguage } = useLanguage()
  const [activeSection, setActiveSection] = useState('home')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }

      setIsVisible(window.scrollY > 200)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ y: -100, opacity: 0 }}
      animate={{ 
        y: isVisible ? 0 : -100, 
        opacity: isVisible ? 1 : 0 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        {/* Gooey background */}
        <div className="absolute inset-0 bg-surface/80 backdrop-blur-md rounded-full border border-white/10" />
        
        {/* Navigation items */}
        <div className="relative flex items-center p-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-2 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-white bg-primary/20'
                  : 'text-text-secondary hover:text-white hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t(item.label)}
              
              {/* Active indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
          
          {/* Language toggle */}
          <motion.button
            onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
            className="ml-1 px-2 py-2 rounded-full text-xs font-medium text-text-secondary hover:text-white hover:bg-white/10 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {language.toUpperCase()}
          </motion.button>
        </div>
      </div>
    </motion.nav>
  )
} 
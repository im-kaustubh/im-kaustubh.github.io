'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from './LanguageProvider'

export function LanguageSelector() {
  const { language, setLanguage } = useLanguage()
  const [showSelector, setShowSelector] = useState(false)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited')
    if (!hasVisited) {
      setShowSelector(true)
    }
  }, [])

  const handleLanguageSelect = (selectedLanguage: 'en' | 'de') => {
    setLanguage(selectedLanguage)
    localStorage.setItem('hasVisited', 'true')
    setShowSelector(false)
  }

  return (
    <AnimatePresence>
      {showSelector && (
        <motion.div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-8">
              Kaustubh Barbudhe
            </h1>
            
            <p className="text-xl text-text-secondary mb-12 max-w-md mx-auto">
              Welcome! Please select your preferred language
              <br />
              Willkommen! Bitte wählen Sie Ihre bevorzugte Sprache
            </p>
            
            <div className="flex gap-6 justify-center">
              <motion.button
                onClick={() => handleLanguageSelect('en')}
                className="btn-primary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                English
              </motion.button>
              
              <motion.button
                onClick={() => handleLanguageSelect('de')}
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Deutsch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 
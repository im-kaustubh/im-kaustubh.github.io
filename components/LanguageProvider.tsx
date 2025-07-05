'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'en' | 'de'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation data
const translations = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.resume': 'Resume',
    'nav.volunteering': 'Volunteering',
    'nav.languages': 'Languages',
    'nav.contact': 'Contact',
    'hero.title': 'Master\'s Student in Computer Engineering',
    'hero.subtitle': 'University of Duisburg-Essen | Intelligent Networked Systems',
    'hero.tagline': 'Analytical, structure-driven problem solver',
    'hero.cta.resume': 'View Resume',
    'hero.cta.projects': 'Explore Projects',
    'hero.cta.contact': 'Contact Me',
    'about.title': 'About Me',
    'about.summary': 'I am a passionate Computer Engineering student with a strong foundation in software development and a keen interest in intelligent systems. My academic journey has equipped me with both theoretical knowledge and practical skills in programming, data analysis, and system design.',
    'skills.title': 'Skills',
    'skills.programming': 'Programming',
    'skills.tools': 'Tools & Technologies',
    'skills.soft': 'Soft Skills',
    'projects.title': 'Projects',
    'projects.view': 'View Project',
    'resume.title': 'Resume',
    'resume.download': 'Download Resume',
    'volunteering.title': 'Volunteering',
    'languages.title': 'Languages',
    'contact.title': 'Contact',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'footer.copyright': '© 2025 Kaustubh Barbudhe. All rights reserved.',
  },
  de: {
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.skills': 'Fähigkeiten',
    'nav.projects': 'Projekte',
    'nav.resume': 'Lebenslauf',
    'nav.volunteering': 'Ehrenamt',
    'nav.languages': 'Sprachen',
    'nav.contact': 'Kontakt',
    'hero.title': 'Masterstudent der Computertechnik',
    'hero.subtitle': 'Universität Duisburg-Essen | Intelligente vernetzte Systeme',
    'hero.tagline': 'Analytischer, strukturierter Problemlöser',
    'hero.cta.resume': 'Lebenslauf anzeigen',
    'hero.cta.projects': 'Projekte erkunden',
    'hero.cta.contact': 'Kontakt',
    'about.title': 'Über mich',
    'about.summary': 'Ich bin ein leidenschaftlicher Student der Computertechnik mit einer soliden Grundlage in der Softwareentwicklung und einem starken Interesse an intelligenten Systemen. Mein akademischer Werdegang hat mich sowohl mit theoretischem Wissen als auch mit praktischen Fähigkeiten in Programmierung, Datenanalyse und Systemdesign ausgestattet.',
    'skills.title': 'Fähigkeiten',
    'skills.programming': 'Programmierung',
    'skills.tools': 'Tools & Technologien',
    'skills.soft': 'Soft Skills',
    'projects.title': 'Projekte',
    'projects.view': 'Projekt anzeigen',
    'resume.title': 'Lebenslauf',
    'resume.download': 'Lebenslauf herunterladen',
    'volunteering.title': 'Ehrenamt',
    'languages.title': 'Sprachen',
    'contact.title': 'Kontakt',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'footer.copyright': '© 2025 Kaustubh Barbudhe. Alle Rechte vorbehalten.',
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [hasVisited, setHasVisited] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    const visited = localStorage.getItem('hasVisited')
    
    if (savedLanguage && ['en', 'de'].includes(savedLanguage)) {
      setLanguageState(savedLanguage)
    }
    
    if (visited) {
      setHasVisited(true)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('language', lang)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 
'use client'

import { useEffect, useState } from 'react'
import { HeroSection } from '@/components/HeroSection'
import { AboutSection } from '@/components/AboutSection'
import { SkillsSection } from '@/components/SkillsSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ResumeSection } from '@/components/ResumeSection'
import { VolunteeringSection } from '@/components/VolunteeringSection'
import { LanguagesSection } from '@/components/LanguagesSection'
import { ContactSection } from '@/components/ContactSection'
import { LanguageSelector } from '@/components/LanguageSelector'

export default function Home() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-text-primary">Loading...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <LanguageSelector />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <section id="about">
        <AboutSection />
      </section>
      
      <section id="skills">
        <SkillsSection />
      </section>
      
      <section id="projects">
        <ProjectsSection />
      </section>
      
      <section id="resume">
        <ResumeSection />
      </section>
      
      <section id="volunteering">
        <VolunteeringSection />
      </section>
      
      <section id="languages">
        <LanguagesSection />
      </section>
      
      <section id="contact">
        <ContactSection />
      </section>
    </main>
  )
} 
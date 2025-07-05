import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/components/LanguageProvider'
import { SplashCursor } from '@/components/SplashCursor'
import { GooeyNav } from '@/components/GooeyNav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kaustubh Barbudhe - Computer Engineering Student',
  description: 'Master\'s student in Computer Engineering at University of Duisburg-Essen, specializing in Intelligent Networked Systems. Analytical, structure-driven problem solver.',
  keywords: ['Computer Engineering', 'Intelligent Networked Systems', 'Python', 'JavaScript', 'Software Development'],
  authors: [{ name: 'Kaustubh Barbudh' }],
  openGraph: {
    title: 'Kaustubh Barbudhe - Computer Engineering Student',
    description: 'Master\'s student in Computer Engineering at University of Duisburg-Essen',
    type: 'website',
    url: 'https://im-kaustubh.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          <SplashCursor />
          <GooeyNav />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
} 
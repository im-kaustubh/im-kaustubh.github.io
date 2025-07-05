# Kaustubh Barbudhe - Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 14+, TypeScript, and Tailwind CSS. Features bilingual support (English/German), smooth animations, and a professional dark theme.

## 🚀 Features

- **Modern Tech Stack**: Next.js 14+ with App Router, TypeScript, Tailwind CSS
- **Bilingual Support**: English and German language switching
- **Smooth Animations**: Framer Motion animations and custom cursor effects
- **Responsive Design**: Mobile-first approach with perfect responsiveness
- **Interactive Elements**: Splash cursor, gooey navigation, and hover effects
- **Professional Sections**: Hero, About, Skills, Projects, Resume, Volunteering, Languages, Contact
- **Contact Form**: Integrated with Formspree for easy communication
- **GitHub Pages Ready**: Optimized for static deployment

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: Formspree
- **Deployment**: GitHub Pages

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/im-kaustubh/im-kaustubh.github.io.git
   cd im-kaustubh.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Colors & Theme
The color scheme is defined in `tailwind.config.js`:
- Primary: Blue (#3b82f6)
- Secondary: Green (#10b981)
- Accent: Orange (#f59e0b)
- Background: Dark (#0a0a0a)

### Content Updates
- **Translations**: Edit `components/LanguageProvider.tsx` for language content
- **Projects**: Update `components/ProjectsSection.tsx` with your project data
- **Skills**: Modify `components/SkillsSection.tsx` with your skill levels
- **Contact**: Update email and social links in `components/ContactSection.tsx`

### Formspree Integration
1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Replace `YOUR_FORM_ID` in `components/ContactSection.tsx` with your actual form ID

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with providers
│   └── page.tsx             # Main page component
├── components/
│   ├── LanguageProvider.tsx # i18n context and translations
│   ├── SplashCursor.tsx     # Custom cursor effects
│   ├── GooeyNav.tsx         # Sticky navigation
│   ├── LanguageSelector.tsx # Language selection overlay
│   ├── HeroSection.tsx      # Hero section with CTAs
│   ├── AboutSection.tsx     # About me section
│   ├── SkillsSection.tsx    # Skills with progress bars
│   ├── ProjectsSection.tsx  # Project showcase
│   ├── ResumeSection.tsx    # Resume download/view
│   ├── VolunteeringSection.tsx # Volunteering timeline
│   ├── LanguagesSection.tsx # Language proficiency
│   └── ContactSection.tsx   # Contact form and info
├── public/
│   └── Resume_Kaustubh.pdf  # Resume file (add your own)
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
└── package.json             # Dependencies and scripts
```

## 🚀 Deployment

### GitHub Pages Deployment

1. **Build the project**
   ```bash
   npm run build
   ```
   
   *Note: With `output: 'export'` configured in `next.config.js`, the build command automatically generates static files in the `out` directory.*

2. **Deploy to GitHub Pages**
   - Push your code to GitHub
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions"
   - The site will be available at `https://im-kaustubh.github.io`

### Alternative Deployment Options

- **Vercel**: Connect your GitHub repository for automatic deployments
- **Netlify**: Drag and drop the `out` folder after building
- **Custom Domain**: Configure DNS settings for your domain

## 🎯 Key Features Explained

### Bilingual Support
- Language selector overlay on first visit
- Persistent language preference in localStorage
- Complete content translation for EN/DE
- Language toggle in navigation

### Splash Cursor
- Custom cursor that follows mouse movement
- Click animations with splash effects
- Smooth spring animations for natural feel

### Gooey Navigation
- Sticky navigation with glass effect
- Active section highlighting
- Smooth scroll to sections
- Language toggle integration

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px+
- Touch-friendly interactions
- Optimized typography scaling

## 🔧 Development Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production (generates static files in `out` directory when using `output: 'export'`)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Guidelines

### Projects Section
- Include project descriptions, tech stack, team size, and role
- Add GitHub links and demo URLs if available
- Use placeholder images or project screenshots

### Skills Section
- Categorize skills into Programming, Tools, and Soft Skills
- Set proficiency levels (0-100%)
- Use relevant emojis for visual appeal

### Contact Information
- Update email address in contact section
- Add correct LinkedIn and GitHub URLs
- Configure Formspree for contact form

## 🎨 Design System

### Typography
- **Headings**: Inter, 600 weight
- **Body**: Inter, 400 weight
- **Code**: JetBrains Mono

### Spacing
- Base unit: 0.25rem (4px)
- Consistent spacing scale throughout

### Animations
- Fade-in effects on scroll
- Hover animations on interactive elements
- Smooth page transitions
- Custom cursor animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide React](https://lucide.dev/) for beautiful icons

---

**Built with ❤️ by Kaustubh Barbudhe** 
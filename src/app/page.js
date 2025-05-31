'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Menu, X, ArrowRight } from 'lucide-react'

const services = [
  {
    title: 'Product Visualization for Tablet',
    description: "3D Product Visualization: A sleek and dynamic video showcasing a study-purpose tablet. This visualization highlights the tablet's features and design.",
    url: 'https://youtu.be/HEiExhAbZik',
    iframe: 'https://www.youtube.com/embed/HEiExhAbZik'
  },
  {
    title: 'CGI Advertising',
    description: 'CGI Advertising: A dynamic video using CGI and visual effects to create an engaging and impactful advertisement.',
    url: 'https://youtu.be/XNVKN2-w9Ro?si=YktA0mO7K1WBIEI2',
    iframe: 'https://www.youtube.com/embed/XNVKN2-w9Ro?si=YktA0mO7K1WBIEI2'
  },
  {
    title: 'Laptop Product Visualization',
    description: '3D Product Visualization: A sleek, dynamic showcase of a modern keyboard, highlighting its design and functionality through precise 3D animation.',
    url: 'https://youtu.be/QucnNVsYaI8?si=P_ulHSPkzqeaEDXN',
    iframe: 'https://www.youtube.com/embed/QucnNVsYaI8?si=P_ulHSPkzqeaEDXN'
  },
  {
    title: 'Website Showcase',
    description: 'Website Showcase: A captivating video designed to showcase the features and user experience of a website, presented with sleek visuals and smooth transitions.',
    url: 'https://youtu.be/UYUwjp9e3Ws?si=Ihw5p9B_lhMRoPS9',
    iframe: 'https://www.youtube.com/embed/UYUwjp9e3Ws?si=Ihw5p9B_lhMRoPS9'
  },
  {
    title: 'Website Product Feature Showcase',
    description: 'Website Feature Showcase: A dynamic video highlighting the features of a website, designed to engage viewers with smooth transitions and captivating visuals.',
    url: 'https://youtu.be/8qoZ926r3Ug?si=dROxzok_Sj6wESi4',
    iframe: 'https://www.youtube.com/embed/8qoZ926r3Ug?si=dROxzok_Sj6wESi4'
  },
  {
    title: 'SaaS Demo',
    description: 'Website Demo: A sleek and engaging video showcasing a SaaS product, designed to highlight its features and user experience through smooth transitions and captivating visuals.',
    url: 'https://youtu.be/VsV3TXTCF0M?si=h-gwsitZjy6joOmY',
    iframe: 'https://www.youtube.com/embed/VsV3TXTCF0M?si=8QCNmX31Ulji-UPL'
  },
]

const offerings = [
  {
    title: 'SaaS Demo Visualization',
    icon: '🎥',
    description: 'Showcase your software with engaging demos'
  },
  {
    title: 'Product Design',
    icon: '✨',
    description: 'Create stunning product visualizations'
  },
  {
    title: 'Product Visualization',
    icon: '💫',
    description: 'Bring your products to life in 3D'
  },
  {
    title: '3D Animation',
    icon: '🎬',
    description: 'Tell your story through motion'
  }
]

const processes = [
  {
    title: 'Discovery Call',
    description: 'In this initial stage, we connect with you to understand your vision, goals, and project requirements. We discuss your ideas, preferences, and any specific needs to ensure we are aligned from the start.',
    icon: '🎯'
  },
  {
    title: 'Design Exploration',
    description: 'During the design exploration phase, we create initial concepts and visual prototypes based on our discussions. This is where creativity meets your vision, allowing us to refine the design and approach based on your feedback.',
    icon: '🎨'
  },
  {
    title: 'Design Implementation',
    description: 'After finalizing the designs, we move into implementation. This phase involves developing the product, incorporating animations, and ensuring that the visuals align with your brand identity and project goals.',
    icon: '⚡'
  },
  {
    title: 'Handoff & Support',
    description: 'Once the project is completed, we provide a comprehensive handoff. This includes delivering all files, assets, and documentation. We also offer support to address any questions or adjustments you may need post-launch.',
    icon: '🚀'
  }
];

const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed w-full z-50">
        <div className="glass-card mx-auto px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="VisForge Studios Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <nav className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-sm font-medium hover:text-primary transition-colors duration-300">Home</button>
                                <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors duration-300">Works</button>
              <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-primary transition-colors duration-300">Services</button>
                <button onClick={() => scrollToSection('process')} className="text-sm font-medium hover:text-primary transition-colors duration-300">Our Process</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm font-medium hover:text-primary transition-colors duration-300">Contact</button>
            </nav>
            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden fixed top-16 left-0 right-0 glass-card p-4 z-40 border-t border-white/10">
          <button onClick={() => scrollToSection('home')} className="block w-full text-left py-3 text-sm font-medium hover:text-primary transition-colors duration-300">Home</button>
          <button onClick={() => scrollToSection('about')} className="block w-full text-left py-3 text-sm font-medium hover:text-primary transition-colors duration-300">About</button>
          <button onClick={() => scrollToSection('services')} className="block w-full text-left py-3 text-sm font-medium hover:text-primary transition-colors duration-300">Services</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-3 text-sm font-medium hover:text-primary transition-colors duration-300">Contact</button>
        </nav>
      )}

      <main>
        <section id="home" className="relative min-h-screen flex items-center justify-center hero-gradient pt-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <Image
                src={logo}
                alt="VisForge Studios Logo"
                width={400}
                height={200}
                className="mx-auto mb-12"
              />
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Welcome to <span className="gradient-text">VisForge Studios</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-12">
                Crafting stunning visuals through 3D Animation, Visual Effects, and Product Visualization
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('services')}
                className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full text-lg transition-colors duration-300 flex items-center mx-auto"
              >
                Explore Our Work <ArrowRight size={24} className="ml-2" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        <section id="services" className="py-24">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center mb-16">What We Offer</h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {offerings.map((offering, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="glass-card p-8 rounded-2xl text-center">
                    <span className="text-4xl mb-4 block">{offering.icon}</span>
                    <h3 className="text-xl font-bold mb-3">{offering.title}</h3>
                    <p className="text-gray-400">{offering.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-24 bg-secondary/20">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center mb-16">Our Latest Work</h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="service-card glass-card rounded-2xl overflow-hidden">
                    <div className="aspect-video">
                      <iframe
                        src={service.iframe}
                        title={service.title}
                        className="w-full h-full"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="text-gray-400">{service.description}</p>
                    </div>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24" id="process">
          <div className="container mx-auto px-6">
            <FadeInWhenVisible>
              <h2 className="text-4xl font-bold text-center mb-16">Our Process</h2>
            </FadeInWhenVisible>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {processes.map((process, index) => (
                <FadeInWhenVisible key={index} delay={index * 0.1}>
                  <div className="glass-card p-8 rounded-2xl">
                    <span className="text-4xl mb-4 block">{process.icon}</span>
                    <h3 className="text-2xl font-bold mb-3">{process.title}</h3>
                    <p className="text-gray-400">{process.description}</p>
                  </div>
                </FadeInWhenVisible>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="glass-card py-16 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to bring your vision to life?</h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {window.open("mailto:contact@visforg.tech")}}
            className="bg-primary hover:bg-primary-hover text-white font-bold py-4 px-8 rounded-full text-lg mb-12 transition-colors duration-300"
          >
            Get in Touch
          </motion.button>
          <p className="text-sm text-gray-500">&copy; 2023 VisForge Studios. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
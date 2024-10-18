'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import logo from '../assets/logo.png'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ChevronRight, Menu, X, Play } from 'lucide-react'

const services = [
  {
    title: 'MECKNOWN',
    description: '3D Product Visualization: A sleek and dynamic video showcasing a study-purpose tablet. This visualization highlights the tablet’s features and design.',
    image: 'https://framerusercontent.com/images/YnkMBFBZnuisO1OW3YEL0DPbYQ.jpg',
    url:"https://youtu.be/HEiExhAbZik"
  },
  {
    title: 'CGI ADVERTISING',
    description: 'CGI Advertising: A dynamic video using CGI and visual effects to create an engaging and impactful advertisement.',
    image: 'https://framerusercontent.com/images/Qe7HtUKsKC0CBmd8m3u4Zk2aak.jpg?scale-down-to=1024',
    url:"https://youtu.be/XNVKN2-w9Ro?si=YktA0mO7K1WBIEI2"
  },
  {
    title: 'KEYBOARD',
    description: '3D Product Visualization: A sleek, dynamic showcase of a modern keyboard, highlighting its design and functionality through precise 3D animation.',
    image: 'https://framerusercontent.com/images/RARaiijDtzGsC5nJaYJFD3qKKC0.jpg?scale-down-to=1024',
    url:"https://youtu.be/QucnNVsYaI8?si=P_ulHSPkzqeaEDXN"
  },
  {
    title: 'WEBSITE VISUALIZATION',
    description: 'Website Showcase: A captivating video designed to showcase the features and user experience of a website, presented with sleek visuals and smooth transitions.',
    image: 'https://framerusercontent.com/images/hR7GseSERzKZOHLW1AYKjzmyDUg.jpg',
    url:'https://youtu.be/UYUwjp9e3Ws?si=Ihw5p9B_lhMRoPS9'
    
  }
]

const offerings = [
  'SaaS Demo Visualization',
  'Product Design',
  'Product visualisation',
  '3D animation'
]

const processes = [
  {
    title: 'Discovery Call',
    description: 'In this initial stage, we connect with you to understand your vision, goals, and project requirements. We discuss your ideas, preferences, and any specific needs to ensure we are aligned from the start.'
  },
  {
    title: 'Design Exploration',
    description: 'During the design exploration phase, we create initial concepts and visual prototypes based on our discussions. This is where creativity meets your vision, allowing us to refine the design and approach based on your feedback.'
  },
  {
    title: 'Design Implementation',
    description: 'After finalizing the designs, we move into implementation. This phase involves developing the product, incorporating animations, and ensuring that the visuals align with your brand identity and project goals.'
  },
  {
    title: 'Handoff & Support',
    description: 'Once the project is completed, we provide a comprehensive handoff. This includes delivering all files, assets, and documentation. We also offer support to address any questions or adjustments you may need post-launch.'
  }
];

const FadeInWhenVisible = ({ children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

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
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#080808] to-[#101010] text-gray-300 font-sans">
      <header className="p-6 flex justify-between items-center fixed w-full z-50 bg-[#080808] bg-opacity-90">
        <div className="flex items-center">

        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-sm hover:text-white transition-colors duration-300">Home</a>
          <a href="#" className="text-sm hover:text-white transition-colors duration-300">About</a>
          <a href="#" className="text-sm hover:text-white transition-colors duration-300">Services</a>
          <a href="#" className="text-sm hover:text-white transition-colors duration-300">Contact</a>
        </nav>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      {isMenuOpen && (
        <nav className="md:hidden fixed top-20 left-0 right-0 bg-[#101010] p-4 z-40">
          <a href="#" className="block py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300">Home</a>
          <a href="#" className="block py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300">About</a>
          <a href="#" className="block py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300">Services</a>
          <a href="#" className="block py-2 text-sm text-white hover:text-blue-400 transition-colors duration-300">Contact</a>
        </nav>
      )}

      <main className="container mx-auto px-6 py-24">
        <section className="text-center mb-20 pt-20">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={logo}
              alt="VisForge Studios Logo"
              width={300}
              height={150}
              className="mx-auto mb-8"
            />
            <h1 className="text-5xl md:text-6xl font-bold mb-4 text-white">Welcome to VisForge Studios</h1>
            <p className="text-xl text-blue-400 mb-8">3D Animation | Visual Effects | Product Visualization</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 flex items-center mx-auto">
              Explore Our Work <ChevronRight size={24} className="ml-2" />
            </button>
          </motion.div>
        </section>

        <FadeInWhenVisible>
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-[#101010] rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="relative">
                  <img src={service.image} alt={service.title} width={600} height={400} className="w-full h-64 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <button onClick={() => {window.open(service.url)}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center">
                      Watch Demo <Play size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">{service.title}</h2>
                  <p className="text-gray-400 text-sm">{service.description}</p>
                </div>
              </div>
            ))}
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section className="mb-20 bg-[#101010] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-white">What We Offer</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {offerings.map((offering, index) => (
                <div key={index} className="bg-[#080808] p-4 rounded-lg text-center">
                  <span className="text-blue-400 text-4xl mb-2 block">0{index + 1}</span>
                  <p className="text-white font-semibold">{offering}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>

        <FadeInWhenVisible>
          <section id="process" className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-6">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {processes.map((process, index) => (
                <div key={index} className="bg-[#080808] p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-2 text-blue-400">{process.title}</h3>
                  <p className="text-gray-400">{process.description}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeInWhenVisible>
      </main>

      <footer className="bg-[#101010] text-center py-12 px-6">
        <p className="text-2xl mb-4 text-white">Ready to bring your vision to life?</p>
        <button onClick={() => {window.open("mailto:contact@visforg.tech")}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg mb-8 transition-colors duration-300">
          Get in Touch
        </button>
        {/*<div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0  00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </div>*/}
        <p className="text-sm text-gray-500">&copy; 2023 VisForge Studios. All rights reserved.</p>
      </footer>
    </div>
  )
}
'use client'
import { useState } from 'react'

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
  'VFX',
  'Product Design',
  'Product visualisation',
  '3D animation'
]

const processes = [
  'Discovery Call',
  'Design Exploration',
  'Design Implementation',
  'Handoff & Support'
]

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#080808] text-gray-300 font-sans">
      <header className="p-6 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">VisForg</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-sm hover:text-white">Home</a>
          <a href="#" className="text-sm hover:text-white">About</a>
          <a href="#" className="text-sm hover:text-white">Services</a>
          <a href="#" className="text-sm hover:text-white">Contact</a>
        </nav>

      </header>

      {isMenuOpen && (
        <nav className="md:hidden bg-[#101010] p-4">
          <a href="#" className="block py-2 text-sm text-white">Home</a>
          <a href="#" className="block py-2 text-sm text-white">About</a>
          <a href="#" className="block py-2 text-sm text-white">Services</a>
          <a href="#" className="block py-2 text-sm text-white">Contact</a>
        </nav>
      )}

      <main className="container mx-auto px-6 py-12">
        <section className="text-center mb-20 bg-gradient-to-b from-[#101010] to-[#080808] py-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Welcome to VisForg</h1>
          <p className="text-xl text-gray-400">3D Animation | Visual Effects | Product Visualization</p>
        </section>

        <section className="grid grid-cols-1 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="bg-[#101010] rounded-lg overflow-hidden flex flex-col md:flex-row">
              <img onClick={() => {window.open(service.url)}} src={service.image} alt={service.title} className="w-full md:w-1/2 h-48 md:h-auto object-cover cursor-pointer" />
              <div className="p-6 md:w-1/2 flex flex-col justify-center">
                <h2 className="text-xl font-bold mb-2 text-white">{service.title}</h2>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-white">What We Offer</h2>
          <ul className="list-none space-y-2 text-sm">
            {offerings.map((offering, index) => (
              <li key={index} className="flex items-center">
                <span className="w-1 h-1 bg-blue-500 rounded-full mr-3"></span>
                {offering}
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Process</h2>
          <ol className="list-none space-y-2 text-sm">
            {processes.map((process, index) => (
              <li key={index} className="flex items-center">
                <span className="w-5 h-5 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white text-xs font-bold">
                  {index + 1}
                </span>
                {process}
              </li>
            ))}
          </ol>
        </section>
      </main>

      <footer className="bg-[#101010] text-center py-12 px-6">
        <p className="text-xl mb-4 text-white">Interested in working with us?</p>
        <button onClick={() => {window.open("mailto:contact@visforg.tech")}} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full text-sm mb-8">
          Contact Us
        </button>
        <p className="text-xs text-gray-500">&copy; VisForg. All rights reserved.</p>
      </footer>
    </div>
  )
}
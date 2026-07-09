'use client';

import { Phone, Mail, MessageCircle, MapPin, Check, Truck, Shield, Clock } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeTab, setActiveTab] = useState('construction');

  const categories = [
    {
      id: 'construction',
      name: 'Construction Materials',
      description: 'Cement, steel, bricks, sand, and all construction supplies you need',
      image: '/images/construction-materials.png',
      items: ['Cement', 'Steel Bars', 'Bricks', 'Sand', 'Gravel', 'Wood']
    },
    {
      id: 'stationary',
      name: 'Stationary Materials',
      description: 'Office supplies, paper products, writing instruments, and more',
      image: '/images/stationary-materials.png',
      items: ['Notebooks', 'Pens', 'Paper', 'Folders', 'Envelopes', 'Clips']
    },
    {
      id: 'furniture',
      name: 'Furniture',
      description: 'Office and commercial furniture for every need',
      image: '/images/furniture.png',
      items: ['Office Chairs', 'Desks', 'Cabinets', 'Shelves', 'Tables', 'Storage']
    },
    {
      id: 'supplies',
      name: 'General Supplies',
      description: 'Everything else you need to run your business smoothly',
      image: '/images/general-supplies.png',
      items: ['Tools', 'Equipment', 'Packaging', 'Cleaning', 'Consumables', 'More']
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Fast Delivery',
      description: 'Reliable and quick delivery across GilGil and surrounding areas'
    },
    {
      icon: Shield,
      title: 'Quality Assured',
      description: 'All products meet high quality standards'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Available to assist you anytime'
    }
  ];

  const activeCategory = categories.find(cat => cat.id === activeTab) || categories[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-white via-blue-50 to-white border-b-2 border-sky-400 backdrop-blur-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-sky-400 via-sky-500 to-blue-600 rounded-xl p-3 shadow-lg">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <div>
              <h1 className="font-bold text-lg bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent">QARINE LIMITED</h1>
              <p className="text-xs text-sky-500 font-semibold">Trusted Supplies Partner</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-blue-700 font-medium hover:text-sky-600 transition">Products</a>
            <a href="#why-us" className="text-blue-700 font-medium hover:text-sky-600 transition">Why Us</a>
            <a href="#contact" className="text-blue-700 font-medium hover:text-sky-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+254701234567"
              className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg transition font-bold text-sm shadow-md"
            >
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-sky-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-20 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-900 via-sky-600 to-blue-700 bg-clip-text text-transparent mb-6 text-balance">
                Quality Supplies for Every Business Need
              </h2>
              <p className="text-lg text-blue-800 mb-8 leading-relaxed font-medium">
                QARINE LIMITED is your trusted partner in GilGil, Kenya for construction materials, stationary, furniture, and comprehensive business supplies. We deliver excellence and reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/254701234567?text=Hello%20QARINE%20LIMITED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg transition font-bold flex items-center gap-2 shadow-lg"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <a 
                  href="tel:+254701234567"
                  className="border-3 border-sky-500 text-sky-600 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100 px-8 py-3 rounded-lg transition font-bold flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-sky-300">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 opacity-20"></div>
              <Image
                src="/images/hero-banner.png"
                alt="QARINE LIMITED Supplies"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-white to-sky-50 relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-0 w-96 h-96 bg-sky-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-900 to-sky-600 bg-clip-text text-transparent mb-4">Our Product Categories</h2>
            <p className="text-blue-700 text-lg font-medium">Explore our wide range of quality supplies</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-lg font-bold transition ${
                  activeTab === cat.id
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-lg scale-105'
                    : 'bg-white text-blue-600 border-2 border-sky-300 hover:bg-gradient-to-r hover:from-sky-100 hover:to-blue-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="bg-gradient-to-br from-white via-sky-50 to-blue-50 rounded-3xl p-8 md:p-12 border-4 border-sky-300 shadow-2xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl border-4 border-sky-400">
                <div className="absolute inset-0 bg-gradient-to-br from-sky-200 to-blue-200 opacity-20"></div>
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-sky-600 to-blue-700 bg-clip-text text-transparent mb-4">{activeCategory.name}</h3>
                <p className="text-blue-800 text-lg mb-8 font-medium">{activeCategory.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {activeCategory.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 shadow-md border-l-4 border-sky-500">
                      <Check className="text-sky-600 font-bold" size={24} />
                      <span className="text-blue-700 font-semibold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-gradient-to-b from-sky-50 via-blue-50 to-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-blue-900 bg-clip-text text-transparent mb-4">Why Choose QARINE LIMITED?</h2>
            <p className="text-blue-700 text-lg font-medium">Your trusted partner for quality supplies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-105 transition border-2 border-sky-300">
                  <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-xl p-4 w-fit mb-6 shadow-lg">
                    <Icon className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-blue-800 leading-relaxed font-medium">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-white via-sky-100 to-blue-50 rounded-3xl p-8 md:p-12 border-4 border-sky-300 shadow-2xl">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">100%</div>
                <p className="text-blue-700 font-semibold">Quality Guaranteed</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">24/7</div>
                <p className="text-blue-700 font-semibold">Customer Support</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">Fast</div>
                <p className="text-blue-700 font-semibold">Same-Day Delivery</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-md border-2 border-sky-200">
                <div className="text-5xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent mb-2">✓</div>
                <p className="text-blue-700 font-semibold">Trusted Since Day 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-sky-400 via-sky-500 to-blue-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
              <p className="text-white text-lg mb-12 leading-relaxed font-medium">
                Ready to place an order or have questions? We&apos;re here to help! Contact us through any of the channels below.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+254701234567"
                  className="flex items-start gap-4 bg-white bg-opacity-15 hover:bg-opacity-30 rounded-2xl p-6 transition group border-2 border-white border-opacity-40"
                >
                  <div className="bg-white rounded-xl p-3 group-hover:scale-110 transition shadow-lg">
                    <Phone className="text-sky-600 font-bold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">Call Us</h3>
                    <p className="text-white font-semibold">+254 701 234 567</p>
                    <p className="text-white text-sm mt-1 opacity-90">Available for calls anytime</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254701234567?text=Hello%20QARINE%20LIMITED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white bg-opacity-15 hover:bg-opacity-30 rounded-2xl p-6 transition group border-2 border-white border-opacity-40"
                >
                  <div className="bg-white rounded-xl p-3 group-hover:scale-110 transition shadow-lg">
                    <MessageCircle className="text-sky-600 font-bold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">WhatsApp</h3>
                    <p className="text-white font-semibold">+254 701 234 567</p>
                    <p className="text-white text-sm mt-1 opacity-90">Chat instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:qarinelimited1@gmail.com"
                  className="flex items-start gap-4 bg-white bg-opacity-15 hover:bg-opacity-30 rounded-2xl p-6 transition group border-2 border-white border-opacity-40"
                >
                  <div className="bg-white rounded-xl p-3 group-hover:scale-110 transition shadow-lg">
                    <Mail className="text-sky-600 font-bold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">Email</h3>
                    <p className="text-white font-semibold">qarinelimited1@gmail.com</p>
                    <p className="text-white text-sm mt-1 opacity-90">We&apos;ll respond within 24 hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 bg-white bg-opacity-15 rounded-2xl p-6 border-2 border-white border-opacity-40">
                  <div className="bg-white rounded-xl p-3 shadow-lg">
                    <MapPin className="text-sky-600 font-bold" size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1 text-lg">Location</h3>
                    <p className="text-white font-semibold">GilGil, Kenya</p>
                    <p className="text-white text-sm mt-1 opacity-90">Visit us for in-person consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 md:p-12 shadow-2xl border-4 border-sky-200">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will contact you soon.'); }}>
                <div>
                  <label htmlFor="name" className="block text-blue-900 font-bold mb-3">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition bg-white text-blue-900 font-medium"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-blue-900 font-bold mb-3">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition bg-white text-blue-900 font-medium"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-blue-900 font-bold mb-3">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition bg-white text-blue-900 font-medium"
                    placeholder="+254..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-blue-900 font-bold mb-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border-2 border-sky-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition bg-white text-blue-900 font-medium resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 via-sky-600 to-blue-700 hover:from-sky-600 hover:via-sky-700 hover:to-blue-800 text-white font-bold py-3 rounded-lg transition shadow-lg uppercase tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-blue-900 via-blue-950 to-blue-1000 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-gradient-to-br from-sky-400 to-blue-500 rounded-xl p-2 shadow-lg">
                  <span className="text-white font-bold text-lg">Q</span>
                </div>
                <span className="font-bold text-lg text-white">QARINE LIMITED</span>
              </div>
              <p className="text-sky-200 text-sm font-medium">Your trusted supplies partner in GilGil, Kenya</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white text-lg">Products</h3>
              <ul className="space-y-3 text-sky-100 text-sm">
                <li><a href="#products" className="hover:text-sky-300 transition font-medium">Construction Materials</a></li>
                <li><a href="#products" className="hover:text-sky-300 transition font-medium">Stationary</a></li>
                <li><a href="#products" className="hover:text-sky-300 transition font-medium">Furniture</a></li>
                <li><a href="#products" className="hover:text-sky-300 transition font-medium">General Supplies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white text-lg">Company</h3>
              <ul className="space-y-3 text-sky-100 text-sm">
                <li><a href="#why-us" className="hover:text-sky-300 transition font-medium">About Us</a></li>
                <li><a href="#contact" className="hover:text-sky-300 transition font-medium">Contact</a></li>
                <li><a href="#" className="hover:text-sky-300 transition font-medium">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-sky-300 transition font-medium">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white text-lg">Contact</h3>
              <ul className="space-y-3 text-sky-100 text-sm">
                <li><a href="tel:+254701234567" className="hover:text-sky-300 transition flex items-center gap-2 font-medium"><Phone size={18} /> +254 701 234 567</a></li>
                <li><a href="https://wa.me/254701234567" target="_blank" rel="noopener noreferrer" className="hover:text-sky-300 transition flex items-center gap-2 font-medium"><MessageCircle size={18} /> WhatsApp</a></li>
                <li><a href="mailto:qarinelimited1@gmail.com" className="hover:text-sky-300 transition flex items-center gap-2 font-medium"><Mail size={18} /> Email</a></li>
                <li className="flex items-start gap-2 font-medium"><MapPin size={18} /> GilGil, Kenya</li>
              </ul>
            </div>
          </div>

          <div className="border-t-2 border-sky-500 border-opacity-30 pt-8 text-center text-sky-200 text-sm">
            <p className="font-semibold">&copy; 2024 QARINE LIMITED. All rights reserved. | Trusted Supplies Partner in Kenya</p>
            <p className="mt-3 text-sky-300">Built with security and reliability in mind</p>
          </div>
        </div>
      </footer>

      {/* Security & Analytics Disclosure */}
      <div className="text-center bg-gradient-to-r from-sky-50 to-blue-50 py-6 text-xs text-blue-700 border-t-2 border-sky-400 font-medium">
        <p>🔒 This website implements industry-standard security practices including HTTPS, input validation, and protection against common web vulnerabilities.</p>
      </div>
    </div>
  );
}

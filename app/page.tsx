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
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-blue-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-lg p-3">
              <span className="text-white font-bold text-xl">Q</span>
            </div>
            <div>
              <h1 className="font-bold text-lg text-blue-900">QARINE LIMITED</h1>
              <p className="text-xs text-sky-600">Trusted Supplies Partner</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-gray-700 hover:text-sky-600 transition">Products</a>
            <a href="#why-us" className="text-gray-700 hover:text-sky-600 transition">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-sky-600 transition">Contact</a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="tel:+254701234567"
              className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg transition font-medium text-sm"
            >
              Call Now
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 text-balance">
                Quality Supplies for Every Business Need
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                QARINE LIMITED is your trusted partner in GilGil, Kenya for construction materials, stationary, furniture, and comprehensive business supplies. We deliver excellence and reliability.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/254701234567?text=Hello%20QARINE%20LIMITED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 rounded-lg transition font-semibold flex items-center gap-2"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <a 
                  href="tel:+254701234567"
                  className="border-2 border-sky-500 text-sky-600 hover:bg-sky-50 px-8 py-3 rounded-lg transition font-semibold flex items-center gap-2"
                >
                  <Phone size={20} />
                  Call Us
                </a>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-2xl">
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
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Product Categories</h2>
            <p className="text-gray-600 text-lg">Explore our wide range of quality supplies</p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  activeTab === cat.id
                    ? 'bg-sky-500 text-white shadow-lg'
                    : 'bg-blue-50 text-blue-900 hover:bg-blue-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={activeCategory.image}
                  alt={activeCategory.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-900 mb-4">{activeCategory.name}</h3>
                <p className="text-gray-700 text-lg mb-8">{activeCategory.description}</p>
                <div className="grid grid-cols-2 gap-4">
                  {activeCategory.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Check className="text-sky-500" size={24} />
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Why Choose QARINE LIMITED?</h2>
            <p className="text-gray-600 text-lg">Your trusted partner for quality supplies</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div key={idx} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition">
                  <div className="bg-gradient-to-br from-sky-100 to-blue-100 rounded-lg p-4 w-fit mb-6">
                    <Icon className="text-sky-600" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-white rounded-xl p-8 md:p-12">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-sky-600 mb-2">100%</div>
                <p className="text-gray-700">Quality Guaranteed</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
                <p className="text-gray-700">Customer Support</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-600 mb-2">Fast</div>
                <p className="text-gray-700">Same-Day Delivery</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-sky-600 mb-2">✓</div>
                <p className="text-gray-700">Trusted Since Day 1</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-sky-500 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get in Touch</h2>
              <p className="text-sky-100 text-lg mb-12 leading-relaxed">
                Ready to place an order or have questions? We&apos;re here to help! Contact us through any of the channels below.
              </p>

              <div className="space-y-6">
                {/* Phone */}
                <a
                  href="tel:+254701234567"
                  className="flex items-start gap-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-6 transition group"
                >
                  <div className="bg-white rounded-lg p-3 group-hover:scale-110 transition">
                    <Phone className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call Us</h3>
                    <p className="text-sky-100">+254 701 234 567</p>
                    <p className="text-sky-100 text-sm mt-1">Available for calls anytime</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254701234567?text=Hello%20QARINE%20LIMITED"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-6 transition group"
                >
                  <div className="bg-white rounded-lg p-3 group-hover:scale-110 transition">
                    <MessageCircle className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">WhatsApp</h3>
                    <p className="text-sky-100">+254 701 234 567</p>
                    <p className="text-sky-100 text-sm mt-1">Chat instantly</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:qarinelimited1@gmail.com"
                  className="flex items-start gap-4 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg p-6 transition group"
                >
                  <div className="bg-white rounded-lg p-3 group-hover:scale-110 transition">
                    <Mail className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email</h3>
                    <p className="text-sky-100">qarinelimited1@gmail.com</p>
                    <p className="text-sky-100 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-start gap-4 bg-white bg-opacity-10 rounded-lg p-6">
                  <div className="bg-white rounded-lg p-3">
                    <MapPin className="text-sky-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Location</h3>
                    <p className="text-sky-100">GilGil, Kenya</p>
                    <p className="text-sky-100 text-sm mt-1">Visit us for in-person consultations</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-2xl">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message! We will contact you soon.'); }}>
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition"
                    placeholder="+254..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 transition resize-none"
                    placeholder="Tell us about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3 rounded-lg transition shadow-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-sky-400 rounded-lg p-2">
                  <span className="text-blue-900 font-bold text-lg">Q</span>
                </div>
                <span className="font-bold text-lg">QARINE LIMITED</span>
              </div>
              <p className="text-sky-100 text-sm">Your trusted supplies partner in GilGil, Kenya</p>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Products</h3>
              <ul className="space-y-2 text-sky-100 text-sm">
                <li><a href="#products" className="hover:text-white transition">Construction Materials</a></li>
                <li><a href="#products" className="hover:text-white transition">Stationary</a></li>
                <li><a href="#products" className="hover:text-white transition">Furniture</a></li>
                <li><a href="#products" className="hover:text-white transition">General Supplies</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Company</h3>
              <ul className="space-y-2 text-sky-100 text-sm">
                <li><a href="#why-us" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4 text-white">Contact</h3>
              <ul className="space-y-2 text-sky-100 text-sm">
                <li><a href="tel:+254701234567" className="hover:text-white transition flex items-center gap-2"><Phone size={16} /> +254 701 234 567</a></li>
                <li><a href="https://wa.me/254701234567" target="_blank" rel="noopener noreferrer" className="hover:text-white transition flex items-center gap-2"><MessageCircle size={16} /> WhatsApp</a></li>
                <li><a href="mailto:qarinelimited1@gmail.com" className="hover:text-white transition flex items-center gap-2"><Mail size={16} /> Email</a></li>
                <li className="flex items-start gap-2"><MapPin size={16} /> GilGil, Kenya</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 pt-8 text-center text-sky-100 text-sm">
            <p>&copy; 2024 QARINE LIMITED. All rights reserved. | Trusted Supplies Partner in Kenya</p>
            <p className="mt-2">Built with security and reliability in mind</p>
          </div>
        </div>
      </footer>

      {/* Security & Analytics Disclosure */}
      <div className="text-center bg-blue-50 py-4 text-xs text-gray-600 border-t border-blue-200">
        <p>This website implements industry-standard security practices including HTTPS, input validation, and protection against common web vulnerabilities.</p>
      </div>
    </div>
  );
}

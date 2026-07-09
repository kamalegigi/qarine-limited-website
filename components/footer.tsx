'use client'

import { Phone, Mail, MapPin, Share2, Heart, MessageSquare } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-lg">
                Q
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg">QARINE</span>
                <span className="text-xs text-blue-100">LIMITED</span>
              </div>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed">
              Providing quality supplies and exceptional service to businesses in GilGil, Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Products
                </a>
              </li>
              <li>
                <a href="#services" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-blue-100 hover:text-white transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="tel:+254701234567" className="text-blue-100 hover:text-white transition-colors text-sm">
                  +254 701 234 567
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:qarinelimited1@gmail.com" className="text-blue-100 hover:text-white transition-colors text-sm break-all">
                  qarinelimited1@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span className="text-blue-100 text-sm">GilGil, Kenya</span>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Construction Materials
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Stationary Supplies
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  Furniture
                </a>
              </li>
              <li>
                <a href="#products" className="text-blue-100 hover:text-white transition-colors text-sm">
                  General Supplies
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-blue-100 text-sm">
              &copy; {currentYear} QARINE LIMITED. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 p-2 rounded-lg transition-colors"
                aria-label="Share"
              >
                <Share2 size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 p-2 rounded-lg transition-colors"
                aria-label="Like"
              >
                <Heart size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-primary/90 p-2 rounded-lg transition-colors"
                aria-label="Chat"
              >
                <MessageSquare size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Privacy Footer */}
      <div className="bg-foreground/90 border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-blue-100 text-xs">
            We take your privacy and security seriously. All communications are encrypted and data is handled securely.
          </p>
        </div>
      </div>
    </footer>
  )
}

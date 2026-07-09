'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
            Q
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary text-lg">QARINE</span>
            <span className="text-xs text-secondary font-semibold">LIMITED</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
            Products
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
            Services
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
            About
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-border md:hidden">
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
                Products
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Services
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

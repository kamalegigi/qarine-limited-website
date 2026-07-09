'use client'

import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary to-secondary py-20 md:py-32 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Quality Supplies for Your Business
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-8 leading-relaxed">
            QARINE LIMITED provides premium construction materials, stationary supplies, furniture, and comprehensive business solutions in GilGil, Kenya. Your trusted partner for all your supply needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
            >
              Get in Touch
              <ArrowRight size={20} />
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
            >
              Explore Products
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

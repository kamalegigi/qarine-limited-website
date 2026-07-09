'use client'

import { CheckCircle } from 'lucide-react'

const highlights = [
  'Wide range of quality products',
  'Competitive pricing',
  'Reliable delivery service',
  'Professional customer support',
  'Verified suppliers',
  'Bulk order discounts',
]

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">About QARINE LIMITED</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              QARINE LIMITED is a leading supplier of quality construction materials, stationary supplies, furniture, and various business necessities in GilGil, Kenya. With a commitment to excellence and customer satisfaction, we serve businesses of all sizes.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our mission is to provide reliable, high-quality products at competitive prices, ensuring that your business gets the best value for every purchase.
            </p>

            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="text-primary flex-shrink-0" size={24} />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Company Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Location</h3>
              <p className="text-foreground text-lg font-semibold mb-2">GilGil, Kenya</p>
              <p className="text-muted-foreground">
                Conveniently located to serve businesses and individuals throughout the region with easy access and efficient service.
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 rounded-xl p-8 border border-secondary/20">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Commitment</h3>
              <p className="text-foreground leading-relaxed">
                We are dedicated to delivering quality products, exceptional service, and building long-term relationships with our customers. Your satisfaction is our priority.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

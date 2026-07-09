'use client'

import { Truck, Clock, Shield, Users } from 'lucide-react'

const services = [
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Quick and reliable delivery services throughout GilGil and surrounding areas',
  },
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Always available to assist you with your supply needs and inquiries',
  },
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All products are verified for quality and authenticity before delivery',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Knowledgeable staff ready to help you find the right products',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose QARINE</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are committed to providing exceptional service and quality products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 text-center border border-border hover:border-primary hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="text-primary" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

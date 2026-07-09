'use client'

import Image from 'next/image'

const products = [
  {
    id: 1,
    name: 'Construction Materials',
    description: 'High-quality cement, bricks, steel rods, and building materials for all your construction needs.',
    image: '/construction-materials.png',
    icon: '🏗️',
  },
  {
    id: 2,
    name: 'Stationary Supplies',
    description: 'Complete range of office stationary including pens, papers, notebooks, folders, and more.',
    image: '/stationary-materials.png',
    icon: '📝',
  },
  {
    id: 3,
    name: 'Furniture',
    description: 'Modern and ergonomic office furniture including desks, chairs, cabinets, and shelving units.',
    image: '/furniture.png',
    icon: '🪑',
  },
  {
    id: 4,
    name: 'General Supplies',
    description: 'Diverse range of business supplies including safety equipment, tools, and packaging materials.',
    image: '/general-supplies.png',
    icon: '📦',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Product Categories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a comprehensive range of quality supplies to meet all your business requirements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border hover:border-primary"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 bg-card">
                <div className="text-4xl mb-3">{product.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Services from '@/components/services'
import Products from '@/components/products'
import About from '@/components/about'
import Contact from '@/components/contact'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="flex flex-col w-full bg-background">
      <Header />
      <Hero />
      <Products />
      <Services />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}

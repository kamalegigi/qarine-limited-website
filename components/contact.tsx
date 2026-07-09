'use client'

import { Phone, Mail, MessageCircle, MapPin } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validate form data
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      alert('Please fill in all fields')
      return
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address')
      return
    }

    // Validate phone number
    const phoneRegex = /^[0-9\s+\-()]+$/
    if (!phoneRegex.test(formData.phone)) {
      alert('Please enter a valid phone number')
      return
    }

    // Construct WhatsApp message (sanitized)
    const whatsappNumber = '+254701234567'
    const whatsappMessage = encodeURIComponent(
      `Hello QARINE LIMITED,\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    )

    // Open WhatsApp with message
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')

    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', message: '' })

    // Reset submitted message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-gradient-to-br from-muted/50 to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contact us today for all your supply needs. We&apos;re here to help!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <a
            href="tel:+254701234567"
            className="bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all group cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Phone className="text-primary" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Call Us</h3>
            <p className="text-primary font-semibold text-lg">+254 701 234 567</p>
            <p className="text-sm text-muted-foreground mt-2">Available for calls and inquiries</p>
          </a>

          <a
            href="mailto:qarinelimited1@gmail.com"
            className="bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all group cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-secondary/10 p-4 rounded-lg group-hover:bg-secondary/20 transition-colors">
                <Mail className="text-secondary" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Email Us</h3>
            <p className="text-secondary font-semibold break-all">qarinelimited1@gmail.com</p>
            <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
          </a>

          <a
            href="https://wa.me/254701234567"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl p-8 border border-border hover:border-primary hover:shadow-lg transition-all group cursor-pointer text-center"
          >
            <div className="flex justify-center mb-4">
              <div className="bg-accent/10 p-4 rounded-lg group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="text-accent" size={32} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">WhatsApp</h3>
            <p className="text-accent font-semibold">Chat on WhatsApp</p>
            <p className="text-sm text-muted-foreground mt-2">Quick and convenient messaging</p>
          </a>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-semibold">
                ✓ Thank you for your message! We will respond shortly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
                maxLength={100}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
                maxLength={100}
              />
            </div>

            <input
              type="tel"
              name="phone"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
              maxLength={20}
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
              required
              maxLength={1000}
            />

            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send Message via WhatsApp
            </button>
          </form>

          <p className="text-sm text-muted-foreground mt-4 text-center">
            Your information is secure and will only be used to respond to your inquiry.
          </p>
        </div>
      </div>
    </section>
  )
}

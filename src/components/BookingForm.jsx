import React, { useState } from 'react'
import '../pages/services.css'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const response = await fetch('https://formspree.io/f/mvzrwzlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', message: '' }) // clear form
      } else {
        alert('Oops! Something went wrong. Please try again.')
      }
    } catch (error) {
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <section className="services-booking">
      <div className="container booking-wrapper">
        <h2>Book Your Session</h2>
        <p>Schedule your consultation today and take the first step toward transformation.</p>

        {submitted ? (
          <p style={{ fontSize: '1.2rem', color: 'var(--brand-purple)' }}>Thank you! Your message has been sent.</p>
        ) : (
          <form className="booking-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="primary-btn">Send</button>
          </form>
        )}
      </div>
    </section>
  )
}

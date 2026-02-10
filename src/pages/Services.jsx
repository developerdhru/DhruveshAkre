import React from 'react'

const pricing = [
  {
    title: 'Cinematic video editing',
    price: 'INR 1000 / minute',
    details: ['Affordable, clean, professional delivery.'],
  },
  {
    title: 'Traditional / Standard video editing',
    price: 'INR 2000 - 2500 (up to 5 min)',
    details: ['Extra: INR 400 / minute'],
  },
  {
    title: 'Invitation card (design)',
    price: 'INR 300 - 500',
    details: ['Print-ready design and layout.'],
  },
  {
    title: 'Invitation video',
    price: 'INR 600 - 1000',
    details: ['Short, clean video invites.'],
  },
]

const reels = [
  { tier: 'Basic', price: 'INR 500 - 700' },
  { tier: 'Standard', price: 'INR 800 - 1200' },
  { tier: 'Cinematic / trending', price: 'INR 1200 - 1500' },
]

const monthly = [
  { pack: '12 reels', price: 'INR 4000 - 5000' },
  { pack: '15 reels', price: 'INR 6000 - 7000' },
]

export default function Services() {
  return (
    <section className="page services">
      <div className="section-head">
        <h2>Video editing services</h2>
        <p>Affordable, clean, and professional editing options.</p>
      </div>

      <div className="pricing-grid">
        {pricing.map((item) => (
          <article className="price-card" key={item.title}>
            <h3>{item.title}</h3>
            <p className="price-main">{item.price}</p>
            <ul className="price-list">
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="pricing-split">
        <div className="price-block">
          <h3>Reel video editing</h3>
          <div className="pill-grid">
            {reels.map((item) => (
              <span key={item.tier}>{item.tier}: {item.price}</span>
            ))}
          </div>
        </div>
        <div className="price-block accent">
          <h3>Monthly reel packages</h3>
          <ul className="price-list">
            {monthly.map((item) => (
              <li key={item.pack}>{item.pack} - {item.price}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="price-note">
        Pricing depends on complexity and revisions. DM for bookings.
      </p>
    </section>
  )
}

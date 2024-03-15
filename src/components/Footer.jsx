import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="https://winegardner.com/wp-content/uploads/2024/01/winegardner-logo.png" alt="Winegardner Logo" />
        <li>Serving Southern and Central California since 1975.</li>
        <li>© 2024 Copyright, Winegardner. All rights reserved</li>
      </div>
      <div>
        <h1>Serving California</h1>
        <li>San Diego County</li>
        <li>Riverside County</li>
        <li>Orange County</li>
        <li>San Bernardino County</li>
        <li>Los Angeles County</li>
        <li>Venture County</li>
        <li>Kern County</li>
        <li>Santa Barbara County</li>
      </div>
      <div>
        <h1>Contact Us</h1>
        <li>(909)-795-9711</li>
        <li>32147 Dunlap Blvd #A</li>
        <li>Yucapia, CA</li>
        <li>CA License #390895</li>
      </div>
    </footer>
  )
}

import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/our-work">Our Work</Link>
        <Link to="/our-people">Our People</Link>
        <Link to="/our-company" className="active">Our Company</Link>
    </nav>
  )
}

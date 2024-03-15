import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
        <Link to="/" onClick={() => {window.scrollTo(0, 0)}}>Home</Link>
        <Link to="/our-work" onClick={() => window.scrollTo(0, 0)}>Our Work</Link>
        <Link to="/our-people" onClick={() => window.scrollTo(0, 0)}>Our People</Link>
        <Link to="/our-company" onClick={() => window.scrollTo(0, 0)} className="active">Our Company</Link>
    </nav>
  )
}

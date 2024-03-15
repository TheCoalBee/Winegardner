import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
        <Link to="/">
            <img src="https://winegardner.com/wp-content/uploads/2024/01/winegardner-logo.png" alt="Winegardner Logo" />
        </Link>
    </header>
  )
}
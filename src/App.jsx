import { useState } from 'react'
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import OurWork from './components/OurWork'
import OurPeople from './components/OurPeople'
import OurCompany from './components/OurCompany'
import CallToAction from './components/CallToAction';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />

        <Routes>
          <Route>
            <Route path="" element={<Home />} />
            <Route path="our-work" element={<OurWork />} />
            <Route path="our-people" element={<OurPeople />} />
            <Route path="our-company" element={<OurCompany />} />
          </Route>
        </Routes>

        <CallToAction />
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

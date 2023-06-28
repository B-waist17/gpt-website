import React from 'react'
import {Blog, Features, Footer, Header, Possibility, WhatGPT3} from './Container';
import {CTA, Brand, Navbar} from './components'
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='Hero'>
        <Navbar />
        <Header />
      </div>
      <Brand /><br /><br />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
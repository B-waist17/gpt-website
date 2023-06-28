import React from 'react'
import './footer.css';
import logo from '../../assets/GPT-3.png'


const Footer = () => {
  return (
    <div className='footerMain'>
      <div className='footerContent'>
        <h1 className='h1Large'>Do you want to step in to the future before others</h1><br /><br />
        <button>Request Early Access</button><br /><br /><br />
        <div className='footerBottom'>
          <div className='fbLogo'>
            <img src={logo} alt="logo" /><br /><br />
            <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
          </div>
          <div className='fbLinks'>
            <div>
              <p>Links</p><br />
              <p><a href="over">Overons</a></p><br />
              <p><a href="social">Social Media</a></p><br />
              <p><a href="count">Counters</a></p><br />
              <p><a href="contact">Contact</a></p><br />
            </div>
            <div>
              <p>Company</p><br />
              <p><a href="t&c">Terms & Conditions</a></p><br />
              <p><a href="pp">Privacy Policy</a></p><br />
              <p><a href="contact">Contact</a></p><br />
            </div>
            <div>
              <p>Get in touch</p><br />
              <p>Crechterwoord K12 182 DK Alknjkcb</p><br />
              <p>085-132567</p><br />
              <p>info@payme.net</p><br />
            </div>
          </div>
        </div><br /><br />
        <p className='rights'>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
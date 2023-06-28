import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import AIimage from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='mainHeaderContainer sectionPadding'>
      <div className='headerContent'>
        <div className='contentLeft'>
          <h1>Let’s Build Something amazing with GPT-3 OpenAI</h1><br />
          <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts 
            all exercise blessing. Indulgence way everything joy alteration boisterous 
            the attachment. Party we years to order allow asked of.</p><br />
          <div className='headerImput'>
            <input type="email" placeholder='Your Email Address' />
            <button>Get Started</button>
          </div><br />
          <div className='headerPeople'>
            <img src= {people} alt="people" />
            <p>1,600 people requested access a visit in last 24 hours</p>
          </div>
        </div>
        <div className='contentRight'>
          <img src= {AIimage} alt="AI" /> 
        </div>

      </div>
      
    </div>
  )
}

export default Header
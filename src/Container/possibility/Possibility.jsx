import React from 'react'
import './possibility.css';
import possibility from '../../assets/possibility.png'


const Possibility = () => {
  return (
    <div className='possibilityMain' id='possibility'>
      <div className='possibilityContent'>
        <img src={possibility} alt="Possibility" />
        <div className='possibilityRight'>
          <p id='pp'>Request Early Access to Get Started</p><br />
          <h1 className='h1Small'>The possibilities are beyond your imagination</h1><br />
          <p className='p1'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts 
            all exercise blessing. Indulgence way everything joy alteration boisterous 
            the attachment. Party we years to order allow asked of.
          </p><br /><br />
          <p className='p3'>Request Early Access to Get Started</p>
          
        </div>
      </div>
    </div>
  )
}

export default Possibility
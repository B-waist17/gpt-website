import React from 'react'
import './feature.css'
const Feature = ( { title, text }) => {
  return (
    <div className='featureContainer'>
      <div className='titleBlock'>
        <div />
        <h1>{title}</h1>
      </div>
      <p>{text}</p>

    </div>
  )
}

export default Feature
import React from 'react'
import './article.css';

const Article = ({imageUrl, date, title}) => {
  return (
    <div>
      <div className='kard'>
              <img src={imageUrl} alt="Blog" />
              <div>
                <p className='p4'>{date}</p>
                <h4>{title}</h4>
                <br />
                <p className='p4'>Read Full Article</p>
              </div>
            </div>
    </div>
  )
}

export default Article
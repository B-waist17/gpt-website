import React from 'react'
import './blog.css';
import {Article} from '../../components'
import { blog1,blog2, blog3, blog4, blog5} from './imports';



const Blog = () => {
  return (
    <div className='blogMain' id='blog'>
      <div className='blogContent'>
        <h1 className='h1Large'>A lot is happening, We are blogging about it. </h1>
        <br /><br /><br />
        <div className='blogBottom'>
          
          <div className='bottomLeft'>
            <Article imageUrl={blog1} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            {/* <img src={blog1} alt="" />
            <div>
              <p className='p4'>Sep 26, 2021</p>
              <h3>GPT-3 and Open  AI is the future. Let us exlore how it is?</h3>
              <p className='p4'>Read Full Article</p>
            </div>  */}
          </div>
          <div className='bottomCards'>
            <Article imageUrl={blog2} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imageUrl={blog3} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
          <div className='bottomCards'>
            <Article imageUrl={blog4} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
            <Article imageUrl={blog5} date="Sep 26, 2021" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          </div>
        
        </div>
      </div>

    </div>
  )
}

export default Blog
import React from 'react'
import './features.css';
import Feature from '../../components/feature/Feature'


const Features = () => {
  return (
    <div className='featuresMain' id='features'>
      <div className='featuresContent'>
        <div className='featuresLeft'>
          <h1 className='h1Small'>The Future is Now and You Just Need To Realize It. 
            Step into Future Today & Make it Happen.</h1><br />
          <p>Request Early Access to Get Started</p>
        </div>
        <div className='featuresRight'>
          <Feature title = 'Improving end distrusts instantly ' text = 'From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'/>
          <Feature title = 'Become the tended active' text = 'Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'/>
          <Feature title = 'Message or am nothing' text = 'Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.'/>
          <Feature title = 'Really boy law county' text = 'Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.'/>
          {/* <div className='featuresRightContent'>
            <div className='rightHead'>
              <div className='bar'></div>
              <h4>Improving end distrusts instantly </h4>
            </div> 
            <p className='p2'>From they fine john he give of rich he. They age and draw mrs like. Improving end 
            distrusts may instantly was household applauded.</p>
          </div>
          <div className='featuresRightContent'>
            <div className='rightHead'>
              <div className='bar'></div>
              <h4>Become the tended active </h4>
            </div> 
            <p className='p2'>Considered sympathize ten uncommonly occasional assistance 
            sufficient not. Letter of on become he tended active enable to.</p>
          </div>
          <div className='featuresRightContent'>
            <div className='rightHead'>
              <div className='bar'></div>
              <h4>Message or am nothing </h4>
            </div> 
            <p className='p2'>Led ask possible mistress relation elegance eat likewise debating. 
            By message or am nothing amongst chiefly address.</p>
          </div>
          <div className='featuresRightContent'>
            <div className='rightHead'>
              <div className='bar'></div>
              <h4>Really boy law county </h4>
            </div> 
            <p className='p2'>Really boy law county she unable her sister. Feet you off its like like six. 
            Among sex are leave law built now. In built table in an rapid blush.</p>
          </div> */}
          
        </div>

      </div>

    </div>
  )
}

export default Features
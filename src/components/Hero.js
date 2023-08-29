import React from 'react'
import image from './images/Group 77.png'

function Hero() {
  return (
    <div className='hero'>

   <div className='hero-image'>
     <img src={image}/>
   </div>

   <div className='hero-text'>
    <h1>Online Experiences</h1>
    <p>Join unique interactive activities led one-of-a-kind hosts-all without leaving home</p>
   </div>

    </div>
  )
}

export default Hero
import React from 'react'
import person from './images/image 12.png'
import star from './images/Star 1-1.png'

function Card(props) {


  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }

  return (

  

    <div className='card'>
      { badgeText && <div className='card--badage'>{badgeText}</div>}
        <div className='card-image'>
    <img src={person}/>
    </div>
    <div className='card-text'>
    <img src={star}/>
    <span>{props.stats.rating}<span>({props.stats.reviewCount}).{props.location}</span></span>
    <p>{props.title}</p>
    <h5>${props.price}<span>/Person</span></h5>
    </div>

    
    </div>
  )
}

export default Card
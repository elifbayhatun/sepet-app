import React from 'react'
import CardTitle from '../cardTitle/CardTitle'
import Cardİmage from '../cardİmage/Cardİmage'
import Cardİnfo from '../cardİnfo/Cardİnfo'
import "./card.css"

function Card({title,image,info,onClick}) {
  return (
    <div className='card' onClick={onClick}>
        <div className='card-bady'>
          <CardTitle title={title}/>
          <Cardİmage image={image}/>
          <Cardİnfo info={info}/>
        </div>

    </div>
  )
}

export default Card
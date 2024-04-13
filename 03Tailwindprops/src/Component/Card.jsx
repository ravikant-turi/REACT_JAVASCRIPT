import React from 'react'

function Card({name,channel}) {
  return (
    <div>
       <h1>{channel}  Hello react {name[0]}</h1>
    </div>
  )
}

export default Card

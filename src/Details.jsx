import React from 'react'

function Details(props) {
  return (
    <>
         <p>{props.name}</p>
         <button href= {props.link}>Open</button>
    </>
   
  )
}

export default Details
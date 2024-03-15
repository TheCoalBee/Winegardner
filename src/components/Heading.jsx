import React from 'react'

export default function Heading({title, imgSrc}) {
  return (
    <div className="heading">
        <h1>{title}</h1>
        <img src={imgSrc} alt="" />
    </div>
  )
}

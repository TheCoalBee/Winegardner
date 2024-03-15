import React from 'react'

export default function Heading({title, imgSrc, position}) {
  return (
    <div className="heading" style={{backgroundImage: "url(" + imgSrc + ")", backgroundPosition: position}}>
        <h1>{title}</h1>
    </div>
  )
}

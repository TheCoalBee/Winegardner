import React from 'react'
import Heading from './Heading'
import { staff } from '../staff';

export default function OurPeople() {
  return (
    <div>
      <Heading title={'Our People'} imgSrc={'https://winegardner.com/wp-content/uploads/2024/01/Abstract-2-705x471.jpg'}/>

      <ul id="our-people">
        {staff.map((person) => {
          return <li key={person.name}>
            <img src={person.img} alt={person.name} />
            <h1>{person.name}</h1>
            <h2>{person.title}</h2>
            <a href={"mailto:" + person.email}><span className="material-symbols-outlined">
            mail
        </span>{person.email}</a>
          </li>
        })}
      </ul>
    </div>
  )
}



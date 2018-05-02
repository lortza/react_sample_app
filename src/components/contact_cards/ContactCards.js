import React from 'react'
import PersonCard from './PersonCard'

const ContactCards = ({people}) => {
  const cards = people.map((person) => (
    <PersonCard person={person} key={person.first_name} />
  ))

  return (
    <div className="ContactCards container">
      {cards}
    </div>
  )
}

export default ContactCards

import React from 'react'

const PersonCard = ({person}) => {
  const {first_name, last_name, phone} = person

  return(
    <div className="PersonCard well">
      <h3>{first_name} {last_name}</h3>
      <dl>
        <dt>Phone</dt>
        <dt>{phone}</dt>
      </dl>
    </div>
  )
}

export default PersonCard

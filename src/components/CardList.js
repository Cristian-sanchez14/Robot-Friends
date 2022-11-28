import React from 'react'
import Card from './Card'

const CardList = ({ robots }) => {
  return (
    <>
      {robots.map((user, idx) => {
        return (
          <Card
            key={idx}
            id={robots[idx].id}
            name={robots[idx].name}
            email={robots[idx].email}
          />
        )
      })}
    </>
  )
}

export default CardList

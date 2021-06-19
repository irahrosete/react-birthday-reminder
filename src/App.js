import React, { useState } from 'react'
import './App.css'
import { people } from './data'

const App = () => {
  const [count, setCount] = useState(5)
  const [birthday, setBirthday] = useState(people)

  const clearAll = () => {
    setCount(0)
    setBirthday([])
  }

  return (
    <div className="container">
      <h1>Birthday Reminder</h1>
      <h2>{count} Birthdays Today</h2>
      {birthday.map((person) => {
        const { id, name, age, photo } = person
        return <>
          <div key={id}>
            <img src={photo} alt={name} />
            <h3>{name}</h3>
            <p>{age}</p>
          </div>
        </>
      })}
      <button className="btn" onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default App

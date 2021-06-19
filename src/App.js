import React, { useState } from 'react'
import { FaTimesCircle } from 'react-icons/fa'
import './App.css'
import { people } from './data'

const App = () => {
  const [count, setCount] = useState(5)
  const [birthday, setBirthday] = useState(people)

  const clearAll = () => {
    setCount(0)
    setBirthday([])
  }

  const remove = (id) => {
    setBirthday((prev) => {
      return prev.filter((person) => person.id !== id)
    })
    setCount((prev) => {
      return prev - 1
    })
  }

  return (
    <div className="container">
      <h1>Birthday Reminder</h1>
      <h2>{count} Birthdays Today</h2>

      {birthday.map((person) => {
        const { id, name, age, photo } = person
        return <div className="item" key={id}>
          <img src={photo} alt={name} style={{borderRadius: "40px", width: "80px", height: "80px"}}/>
          <div className="desc">
            <h3>{name}</h3>
            <p>{age}</p>
          </div>
          <FaTimesCircle className="times" onClick={() => remove(id)}/>
        </div>
      })}

      <button className="btn" onClick={clearAll}>Clear All</button>
    </div>
  )
}

export default App

import React from 'react'
import Tasks from './Tasks'

export default function ToDoList({toDos}) {
  return (
    <>
      <h1>Watch Your List Web App</h1>
      {toDos.map(tasks => {
        return <Tasks key={tasks.id} tasks={tasks} />
      })}
    </>
  )
}

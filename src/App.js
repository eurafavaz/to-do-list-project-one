import React, { useState, useRef } from 'react';
import './App.css';
import ToDoList from "./components/ToDoList"

function App() {
  const [toDos, setToDos] = useState([])
  const taskNameRef = useRef()

  function handleAddTask(e) {
    const name = taskNameRef.current.value
    if (name === "") return
    setToDos(prevToDos => {
      return [...prevToDos, { id: 1, name: name, complete: false }]
    })
    taskNameRef.current.value = null
  }

  return (
    <>
      <ToDoList toDos={toDos} />
      <input ref={taskNameRef} type={"text"} />
      <button onClick={handleAddTask}>Add Task</button>
      <button>Clear All Done</button>
      <div>0 tasks left to do</div>
    </>
  );
}

export default App;

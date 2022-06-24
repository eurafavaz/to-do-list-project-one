import React from 'react'

export default function Tasks({tasks}) {
  return (
    <div>
        <label>
            <input type="checkbox" checked={tasks.complete} />
            {tasks.name}
        </label>
    </div>
  )
}

import React from 'react'
import JSON from "./course.json"
import Course from './Course.jsx'
import PlayPause from "./PlayPause.jsx"

import "./global.css"

const App = () => {
  return (
    <div>
      <PlayPause />
      <Course data={JSON} />
    </div>
  )
}

export default App
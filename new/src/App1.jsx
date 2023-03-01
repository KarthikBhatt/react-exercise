import React from 'react'
import Grandparent from './Grandparent';
import "./global1.css"

const App1 = () => {
  return (
    <div className='rootcomponent'>
        <strong>ROOT</strong>
        <Grandparent data="MARC" />
    </div>
  )
}

export default App1
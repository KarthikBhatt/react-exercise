import React from 'react'
import Parent from './Parent';

const Grandparent = () => {
  return (
    <div className='grandparent'>
        <strong>Grandparent</strong>
        <Parent data={props.data} />
    </div>
  )
}

export default Grandparent
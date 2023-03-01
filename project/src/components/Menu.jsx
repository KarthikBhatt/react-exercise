import React from 'react'

const Menu = () => {
  return (
    <div className='menublock'>
        <ul>
            <li>
                <a href="#">Azure</a>
            </li>
            <li>
                <a href="">Explore</a>
            </li>
            <li>
                <a href="">Products</a>
            </li>
            <li>
                <a href="">Solution</a>
            </li>
            <li>
                <a href="">Pricing</a>
            </li>
            <li>
                <a href="">Partners</a>
            </li>
            <li>
                <a href="">Resources</a>
            </li>
            <input type="text" placeholder='search' />
        </ul>
    </div>
  )
}

export default Menu
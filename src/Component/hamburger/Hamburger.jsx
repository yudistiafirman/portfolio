import React from 'react'
import './Hamburger.css'
function Hamburger({open,onClick}) {
    return (
        <div onClick={onClick} className={open?"nav-icon open":"nav-icon"}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    )
}

export default Hamburger

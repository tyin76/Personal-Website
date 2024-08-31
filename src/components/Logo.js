import React from 'react'
import logo from '../images/Terence Yin.svg'

function Logo({width, height}) {
  return (
    <div>
        <img src={logo} width={width} height={height}></img>
    </div>
  )
}

export default Logo

import React from 'react'
import './button.css'

const Button = ({name}) => {
  return (
    <>
      <button className='B-Button'>{name}</button>
    </>
  )
}

export default Button
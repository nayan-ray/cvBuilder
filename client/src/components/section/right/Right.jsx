import React from 'react'
import "./right.css"

export const Right = ({mouseHandler}) => {
  return (
    <div className="Right">
        right body
        <div onMouseDown={mouseHandler} className="right-resizer"></div>
    </div>
  )
}

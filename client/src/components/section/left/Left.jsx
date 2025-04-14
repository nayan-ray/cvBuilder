import React from 'react'
import "./left.css"

const Left = ({mouseHandler}) => {
 


  return (
    <div className="left">
       <div className="left-handler" onMouseDown={mouseHandler}></div>
       left body
    </div>
  )
}

export default Left

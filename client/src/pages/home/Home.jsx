import { useEffect, useRef, useState } from 'react'
import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Left from '../../components/section/left/Left'

const Home = () => {
  const [oldX, setOldX] = useState(0)
  // const [mx, setMx] = useState(0)
  const [oldWidth, setOldWidth] = useState(null)
  const leftAppRef = useRef(null);
  const leftApp = document.getElementById('left-appID');
      const mouseMove = (e) => {
      console.log(oldWidth, oldX , "mouseMove");
      let movableX = e.clientX - oldX;
      // setMx(movableX);
      leftApp.style.width = `${parseInt(oldWidth) + movableX}px`;
      // leftAppRef.current.style.width = `${parseInt(oldWidth) + mx}px`;
      
   }
 
  const mouseHandler = (e) => {
     e.preventDefault();
    //  l  oldX = e.clientX;
     setOldX(e.clientX);
    let oldWidthWidth = window.getComputedStyle(leftAppRef.current).width;
    setOldWidth(oldWidthWidth);
     console.log(oldWidth, oldX);


   const mouseUp = (e) => { 
    console.log('mouse up');
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  }
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
 

  
}
  

useEffect(()=>{
  // let oldWidthWidth = window.getComputedStyle(leftAppRef.current).width;
  setOldWidth(10);
  console.log("home useEffect");
  // i cannot set and get the width of the element in the same time
  console.log(oldWidth);
  
    // console.log(oldWidthWidth);
}, [])

console.log(oldWidth);


  return (
    <div>
        <Navbar />
        <div className="d-flex align-items-center">
           <div id='left-appID' className="left-app" ref={leftAppRef}>
              <Left mouseHandler ={mouseHandler} />
           </div>
           <div className="middle-app">middle</div>
           <div className="right-app">{oldX}</div>
       </div>
    </div>
  )
}

export default Home

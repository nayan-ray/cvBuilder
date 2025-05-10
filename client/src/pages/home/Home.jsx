import { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Left from "../../components/section/left/Left";
import { Right } from "../../components/section/right/Right";

const Home = () => {
  const [leftWidth, setLeftWidth] = useState(25); // Default initial width
  const [rightWidth, setRightWidth] = useState(30); // Default initial width
  const [middleX, setMiddleX] = useState(0); // Default initial width
  const [middleY, setMiddleY] = useState(0); // Default initial width
  const [scaleValue, setScaleValue] = useState(1); // Default initial width
 // Ref to store the width of the left-app div

  const leftAppRef = useRef(null); // Ref for the left-app div
  const rightAppRef = useRef(null); // Ref for the right-app div
  const dragging = useRef({click : false, resizer: ""}); // Ref to track dragging state
  const previousClientX = useRef(0);
  const previousClientY = useRef(0);

  const handleMouseDownLeft = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
   
    
    
    previousClientX.current = e.clientX;
    dragging.current = {click : true, resizer: "left"};
    // Get the current width of the left-app div
  }, []);
  
  const handleMouseDownRight = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
    previousClientX.current = e.clientX;
    dragging.current = {click : true, resizer: "right"};
    
    
  }, []);

  const handleMouseDownMiddle = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
    previousClientX.current = e.clientX;
    previousClientY.current = e.clientY;
    dragging.current = {click : true, resizer: "middle"};
  }, []);
  const handleMouseMove = useCallback((e) => {
    if (!dragging.current.click) return;
   
    //persentage deltaX 
     const deltaX = ((e.clientX - previousClientX.current) / window.innerWidth) * 100;
    const ClientX = e.clientX - previousClientX.current;
    const ClientY = e.clientY - previousClientY.current;
     
    previousClientX.current = e.clientX;
    previousClientY.current = e.clientY;
    if(dragging.current.resizer === "left"){
     
      
      setLeftWidth((preWidth)=>{
        const newWidth = preWidth + deltaX;
        if(25 <= newWidth && newWidth < 40) {    
          return newWidth;
        }
        return preWidth; // Return the previous width if the condition is not met
      })
      
    }
     
    if(dragging.current.resizer === "right"){
   
      setRightWidth((preWidth)=>{
        const newWidth = preWidth - deltaX;
        if(30 <= newWidth && newWidth < 40) {    
          return newWidth;
        }
        return preWidth; // Return the previous width if the condition is not met
      })
    }

    if(dragging.current.resizer === "middle"){
       setMiddleX((preX)=>{
          return preX + ClientX;
       })
        setMiddleY((preY)=>{
          return preY + ClientY;  
        })
       
        
    }
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = {click : false, resizer: ""}; // Reset dragging state
  }, []);

 const handleWheel = (e)=>{

   const delta = e.deltaY;
  if(delta > 0){
    setScaleValue((preScale)=>{
      const newScale = preScale + 0.1;
      if(newScale <= 2.5){
        return newScale;
      }
      return preScale;
    })
  }else{
    setScaleValue((preScale)=>{
      const newScale = preScale - 0.1;
      if(newScale >= 0.5){
        return newScale;
      }
      return preScale;
    })
  }

  
 }
 
  
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <div>
      <Navbar />
      <div className="d-flex align-items-center">
        <div
          id="left-appID"
          className="left-app"
          ref={leftAppRef} // Attach the ref to the left-app div
          style={{ width: `${ leftWidth }%` }} // Set the initial width
        >
          <Left mouseHandler={handleMouseDownLeft} />
        </div>
        <div className="middle-app">
           <div
             onMouseDown={handleMouseDownMiddle}
             onWheel={handleWheel}
             className="middle-wrapper"
             >
             <div className="middle-container">
                <div
                  style={{ transform: `translate(${middleX}px, ${middleY}px) scale(${scaleValue})` }} // Apply the translation
                 className="mid-child-container"
                 >
                    middle
                </div>
             </div>
           </div>
        </div>
        <div 
        ref={rightAppRef} // Attach the ref to the right-app div
        className="right-app"
        style={{ width: `${ rightWidth }%` }} // Set the initial width
        >
          
          <Right mouseHandler = {handleMouseDownRight}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
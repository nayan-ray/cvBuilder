import { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Left from "../../components/section/left/Left";
import { Right } from "../../components/section/right/Right";

const Home = () => {
  const [leftWidth, setLeftWidth] = useState(330); // Default initial width
  const [rightWidth, setRightWidth] = useState(330); // Default initial width
  const leftAppRef = useRef(null); // Ref for the left-app div
  const rightAppRef = useRef(null); // Ref for the right-app div
  const dragging = useRef({click : false, resizer: ""}); // Ref to track dragging state
  const previousClientX = useRef(0);

  const handleMouseDownLeft = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
    console.log("left");
    
    
    previousClientX.current = e.clientX;
    dragging.current = {click : true, resizer: "left"};
  }, []);
  
  const handleMouseDownRight = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
    previousClientX.current = e.clientX;
    dragging.current = {click : true, resizer: "right"};
    console.log("right");
    console.log(rightAppRef.current.getBoundingClientRect().left);
    
  }, []);
  const handleMouseMove = useCallback((e) => {
    if (!dragging.current.click) return;
    const deltaX = e.clientX - previousClientX.current;
    previousClientX.current = e.clientX;
    if(dragging.current.resizer === "left"){
      const oldWidth = leftAppRef.current.offsetWidth; // Get the current width of the left-app div
      const newWidth = oldWidth + deltaX;
      if(leftWidth < newWidth && newWidth < leftWidth + 300) {
        leftAppRef.current.style.width = `${newWidth}px`; // Set the new width
      }
    }
     
    if(dragging.current.resizer === "right"){
      const oldWidth = rightAppRef.current.offsetWidth; // Get the current width of the right-app div
     // get the left position of the right-app div
      const rightPosition = rightAppRef.current.getBoundingClientRect().left; // Get the left position of the left-app div
      const newWidth = oldWidth - deltaX;
      if(rightWidth < newWidth && newWidth < rightWidth + 300) {
        rightAppRef.current.style.width = `${newWidth}px`; // Set the new width
        rightAppRef.current.style.left = `${rightPosition + deltaX}px`; // Set the new left position
      }
    }

  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = {click : false, resizer: ""}; // Reset dragging state
  }, []);

  useEffect(() => {
    // Use setTimeout to ensure the DOM is fully rendered before accessing the width
     if (leftAppRef.current) {
      const initialWidth = leftAppRef.current.offsetWidth; // Get the initial width of the left-app div
      setLeftWidth(initialWidth); // Set the initial width state
     }
    if (rightAppRef.current) {
      const initialWidth = rightAppRef.current.offsetWidth; // Get the initial width of the right-app div
      setRightWidth(initialWidth); // Set the initial width state
     }
  }, []);
 
  
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
          
        >
          <Left mouseHandler={handleMouseDownLeft} />
        </div>
        <div className="middle-app">middle</div>
        <div 
        ref={rightAppRef} // Attach the ref to the right-app div
        className="right-app"
        >
          
          <Right mouseHandler = {handleMouseDownRight}/>
        </div>
      </div>
    </div>
  );
};

export default Home;
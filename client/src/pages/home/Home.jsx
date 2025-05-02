import { useCallback, useEffect, useRef, useState } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Left from "../../components/section/left/Left";

const Home = () => {
  const [leftWidth, setLeftWidth] = useState(330); // Default initial width
  const leftAppRef = useRef(null); // Ref for the left-app div
  const dragging = useRef(false);
  const previousClientX = useRef(0);

  const handleMouseDown = useCallback((e) => {
    e.preventDefault(); // Prevent text selection
    previousClientX.current = e.clientX;
    dragging.current = true;
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragging.current) return;
    const deltaX = e.clientX - previousClientX.current;
    previousClientX.current = e.clientX;
    const oldWidth = leftAppRef.current.offsetWidth; // Get the current width of the left-app div
    const newWidth = oldWidth + deltaX;
    leftAppRef.current.style.width = `${newWidth}px`; // Set the new width
  }, []);

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    // Use setTimeout to ensure the DOM is fully rendered before accessing the width
  
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
          <Left mouseHandler={handleMouseDown} />
        </div>
        <div className="middle-app">middle</div>
        <div className="right-app">right</div>
      </div>
    </div>
  );
};

export default Home;
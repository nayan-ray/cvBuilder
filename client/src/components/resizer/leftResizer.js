import React, { useCallback, useEffect, useRef, useState } from 'react'

export const leftResizer = (initialvalue) => {
   const [result , SetResult] = useState(initialvalue);
   const dragging = useRef(false);
   const previousClientX = useRef(0);

   const handleMouseDown = useCallback((e)=>{
       previousClientX.current = e.clientX ;
       dragging.current = true;

   }, [])

   const handleMouseMove = useCallback((e)=>{
         if(!dragging.current) return;
          const deltaX = e.clientX - previousClientX.current;
          previousClientX.current = e.clientX;
          SetResult((prev) => {
            const newValue = prev + deltaX;
            return newValue < 0 ? 0 : newValue;
          });
   }, [])
    
    const handleMouseUp = useCallback((e)=>{
        dragging.current = false;
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('mousedown', handleMouseDown);

    }
    , [])
   useEffect(()=>{
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);  
      window.addEventListener('mousedown', handleMouseDown);
      return () => {
         window.removeEventListener('mousemove', handleMouseMove);
         window.removeEventListener('mouseup', handleMouseUp);  
         window.removeEventListener('mousedown', handleMouseDown);  
      }
   }, [])
   
  return result;
}

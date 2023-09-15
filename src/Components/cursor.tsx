import { useState, useEffect } from "react";

type CursorProp = {textRef ?: any; translatePos?: Array<number>; xJump?: number; newLine?: Array<number>; colour?: string};
  
// function getTextWidth(text: string) {
//   const canvas = document.createElement('canvas');
//   const context = canvas.getContext('2d');
//   context.font = window.getComputedStyle(textContainer).getPropertyValue('font');
//   const width = context.measureText(text).width;
//   return width;
// }


function Cursor({ xJump, textRef}: CursorProp) {
    const [translateX, setTranslateX] = useState(0);

    const jump = xJump || 15;
    const handleKeyPress = (event: KeyboardEvent) => {
        if (event.code === "Space") {
        // Adjust the value to control the amount of movement
        setTranslateX((prevTranslateX) => prevTranslateX + jump);
        console.log(translateX);
        }
    };



    useEffect(() => {
    console.log("Effect is running!"); // Add this line
    document.addEventListener("keydown", handleKeyPress);

    // Clean up the event listener when the component unmounts
    return () => {
        document.removeEventListener("keydown", handleKeyPress);
    };
    }, [translateX]);

  // Define the style for the div based on translateY
 

    const modifiedClass = "absolute border-[1.5px] h-6 border-arch-cursor";
    return (
      <div className={modifiedClass} style={{ transform: `translateX(${translateX}px) translateY(-133px)` }}></div>
    );
}

export default Cursor;

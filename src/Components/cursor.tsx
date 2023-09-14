import { useState, useEffect } from "react";

type CursorProp = {translatePos?: Array<number>; xJump?: number; newLine?: Array<number>};
  



function Cursor({translatePos, xJump, newLine}: CursorProp) {
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
 

    const modifiedClass = "absolute border-[1.5px] h-6 border-green-950";
    return (
      <div className={modifiedClass} style={{ transform: `translateX(${translateX}px) translateY(-107px)` }}></div>
    );
}

export default Cursor;

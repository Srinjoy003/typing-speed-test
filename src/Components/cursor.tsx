import { useState, useEffect, useRef } from "react";

type CursorProp = {textRef ?: any; translatePos?: Array<number>; xJump?: number; newLine?: Array<number>; colour?: string};
  


function Cursor({ xJump, textRef}: CursorProp) {
    const [translateX, setTranslateX] = useState(0);
    const [widthList, setWidthList] = useState<number[]>([]);
    const [jump, setJump] = useState<number>(0);
    const [jumpIndex, setJumpIndex] = useState(0);

    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${translateX}px) translateY(-133px)`;
      }
    }, [translateX]);

    useEffect(() => {
      const textDiv: HTMLDivElement = textRef.current;
      const spanList = textDiv.querySelectorAll("span");
      const newWidthList = Array.from(spanList).map((span) => {
        return span.getBoundingClientRect().width;
      }).slice(1);

      setWidthList(newWidthList);
    
    }, [textRef]);


    

    useEffect(() => {
      console.log("Effect is running!"); // Add this line
      document.addEventListener("keydown", handleKeyPress);
      
      // Clean up the event listener when the component unmounts
      return () => {
          document.removeEventListener("keydown", handleKeyPress);
      };
      }, [widthList, jumpIndex]);

  
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {

        if (widthList.length > jumpIndex) {
      // Adjust the value to control the amount of movement
          setJump(widthList[jumpIndex])

          setTranslateX((prevTranslateX) => {
            return prevTranslateX + jump;
          });
          
          setJumpIndex((curIndex) => {
            return curIndex + 1;
          });

          console.log()
          
        }
      }
    };


  // Define the style for the div based on translateY
 

    const modifiedClass = "absolute border-[1.5px] h-6 border-arch-cursor";
    return (
      <div ref={cursorRef} className={modifiedClass}></div>
    );
}

export default Cursor;

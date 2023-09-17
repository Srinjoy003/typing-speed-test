import { useState, useEffect, useRef } from "react";

type CursorProp = {textRef ?: any; translatePos?: Array<number>; xJump?: number; newLine?: Array<number>; colour?: string};
  


function Cursor({ xJump, textRef}: CursorProp) {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(-134); //-133 -97
    const [widthList, setWidthList] = useState<any>([]);
    const [jump, setJump] = useState<number>(0);
    const [jumpIndex, setJumpIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);


    const cursorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    }, [translateX, translateY]);

    useEffect(() => {
      const textDiv: HTMLDivElement = textRef.current;
      const outerSpans = textDiv.querySelectorAll("span"); // Select outer spans

      const newWidthList = Array.from(outerSpans).map((outerSpan) => {
        const innerSpans = outerSpan.querySelectorAll("span"); // Select nested spans within the outer span
        const widths = Array.from(innerSpans).map((span) => span.getBoundingClientRect().width);
        return widths.length > 0 ? widths : null;
      }).filter(Boolean); // Filter out null values
     
      

      setWidthList(newWidthList);

    
    }, [textRef]);


    

    useEffect(() => {
      console.log("Effect is running!"); // Add this line
      document.addEventListener("keydown", handleKeyPress);
      
      // Clean up the event listener when the component unmounts
      return () => {
          document.removeEventListener("keydown", handleKeyPress);
      };
      }, [widthList, jumpIndex, lineIndex]);

  
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {

        
        if (lineIndex >= widthList.length) {
          // Reset lineIndex and jumpIndex when we reach the end
          setLineIndex(0);
          setJumpIndex(0);
        }
    
        const currentLine = widthList[lineIndex];
    
        if (currentLine && currentLine.length > jumpIndex) {
          setJump(currentLine[jumpIndex]);
    
          setTranslateX((prevTranslateX) => {
            return prevTranslateX + jump;
          });
    
          setJumpIndex((curIndex) => {
            return curIndex + 1;
          });
    
          if (jumpIndex >= currentLine.length - 1) {
            setJumpIndex(0);
            setLineIndex((curLineIndex) => {
              return curLineIndex + 1;
            });

            setTranslateY((prevTranslateY) => {
              return prevTranslateY + 37;
            });

            setTranslateX(0);
             

          }
    
          // console.log(lineIndex, jumpIndex, translateX, jump);
        }
    
    
      }
    };


 

    const modifiedClass = "absolute border-[1.5px] h-6 border-arch-cursor transition-transform duration-200";
    return (
      <div ref={cursorRef} className={modifiedClass}></div>
    );
}

export default Cursor;

import { useState, useEffect, useRef } from "react";

type CursorProp = {textRef ?: any; translatePos?: Array<number>; xJump?: number; newLine?: Array<number>; colour?: string};
  


function Cursor({textRef}: CursorProp) {
    const [translateX, setTranslateX] = useState(0);
    const [translateY, setTranslateY] = useState(-134); //-133 -97
    const [widthList, setWidthList] = useState<any>([]);
    const [jumpIndex, setJumpIndex] = useState(0);
    const [lineIndex, setLineIndex] = useState(0);


    const cursorRef = useRef<HTMLDivElement>(null)

    const moveCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
      }
    };  


    useEffect(() => {
        moveCursor();
    }, [translateX, translateY]);

    useEffect(() => {
      const textDiv: HTMLDivElement = textRef.current;
      const outerSpans: any = textDiv.childNodes; // Select outer spans


      const newWidthList = Array.from(outerSpans).map((outerSpan: any) => {
        const innerSpans = outerSpan.getElementsByTagName("span"); // Select nested spans within the outer span
        const widths = Array.from(innerSpans).map((span: any) => span.getBoundingClientRect().width);
        return widths 
      });
     
      

      setWidthList(newWidthList);
     
      console.log(newWidthList[0]?.length)

    
    }, [textRef]);


    

    useEffect(() => {
      document.addEventListener("keydown", handleKeyPress);
      
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
    
        if (currentLine && currentLine.length >= jumpIndex) {

          setJumpIndex((curIndex) => {
            return curIndex + 1;
          });

          // setJump(currentLine[jumpIndex]);
    
          setTranslateX((prevTranslateX) => {
            return prevTranslateX + currentLine[jumpIndex];
          });
    
         


    
          if (jumpIndex >= currentLine.length) {
            setJumpIndex(0);
            setLineIndex((curLineIndex) => {
              return curLineIndex + 1;
            });

            setTranslateY((prevTranslateY) => {
              return prevTranslateY + 37;
            });

            setTranslateX(0);
             

          }



    
        }
    
    
      }
    };


 

    const modifiedClass = "absolute border-[1.5px] h-6 border-arch-cursor transition-transform duration-200";
    return (
      <div ref={cursorRef} className={modifiedClass}></div>
    );
}

export default Cursor;

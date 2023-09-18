import { useRef, useState, useEffect } from "react";
import Cursor from "./cursor";

type textAreaProp = { textColour: string };

function CharacterSeparator(lineList: Array<Array<string>>) {
  let charList = [];

  for (let i = 0; i < lineList.length; i++) {
    let charListLine = [];

    for (let j of lineList[i]) {
      for (let k of j) charListLine.push(k);
    }
    charList.push(charListLine);
  }

  return charList;
}

function LineSeparator(wordList: Array<string>, charCount: number) {
  let counter = 0;
  let lineList = [];
  let len = wordList.length;
  let prevIndex = 0;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < wordList[i].length; j++) {
      counter++;

      if (counter == charCount) {
        let line = wordList.slice(prevIndex, i);

        if (line[line.length - 1] === " ") line.pop();

        if (line[0] == " ") line = line.slice(1);

        lineList.push(line);
        counter = j;
        prevIndex = i;
      }
    }
  }

  return lineList;
}

function CreateFinalDiv() {
  const randomWords = ["apple", "banana", "chocolate", "dog", "elephant", "flower", "guitar", "happiness", "internet", "jazz", "kangaroo", "lighthouse", "mountain", "notebook", "ocean", "penguin", "quasar", "rainbow", "sunset", "tiger", "umbrella", "volcano", "watermelon", "xylophone", "yogurt", "zeppelin"];

  let len = randomWords.length;
  let wordCount = 36; //36
  let lineCount = 4; //4
  let charCount = 60; //60
  let wordList = [];
  const spaceChar = "&ensp;";

  for (let i = 0; i < wordCount; i++) {
    let randomIndex = Math.floor(Math.random() * len) % wordCount;
    wordList.push(randomWords[randomIndex]);
    wordList.push(" ");
  }

  wordList.pop();

  let lineList = LineSeparator(wordList, charCount).slice(0, lineCount);
  let finalList = CharacterSeparator(lineList);
  finalList = finalList.map((row) => {
    return row.map((str) => {
      return str.replace(" ", spaceChar);
    });
  });

  let finalDiv = finalList.map((subArray, rowIndex) => {
    let subSpan = subArray.map((character, colIndex) => {
      if (character === spaceChar) {
        return <span key={colIndex} dangerouslySetInnerHTML={{ __html: spaceChar }}></span>;
      } else {
        return <span key={colIndex}>{character}</span>;
      }
    });

    return <span key={rowIndex}> {subSpan} </span>;
  });

  return finalDiv;
}

function TypingArea({ textColour }: textAreaProp) {
  const [finalDiv, setFinalDiv] = useState<any>(() => CreateFinalDiv());
  // const [letterIndex, setLetterIndex] = useState(0);
  // const [lineIndex, setLineIndex] = useState(0);

  // let finalDiv = CreateFinalDiv();
  const textDivRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null)
  

  //------------------------------------------------------------------------------------------------------------------
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(-134); //-133 -97
  const [widthList, setWidthList] = useState<any>([]);
  const [jumpIndex, setJumpIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);



  const moveCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    }
  };  


  useEffect(() => {
      moveCursor();
  }, [translateX, translateY]);

  useEffect(() => {
    const textDiv: HTMLDivElement | null = textDivRef.current;
    
    if (textDiv){
      
      const outerSpans: any = textDiv.childNodes; // Select outer spans

      const newWidthList = Array.from(outerSpans).map((outerSpan: any) => {
        const innerSpans = outerSpan.getElementsByTagName("span"); // Select nested spans within the outer span
        const widths = Array.from(innerSpans).map((span: any) => span.getBoundingClientRect().width);
        return widths 
      });
   
      setWidthList(newWidthList);
    }
  
  }, [textDivRef]);


  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    
    return () => {
        document.removeEventListener("keydown", handleKeyPress);
    };
    }, [widthList, jumpIndex, lineIndex]);


  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.code === "Space") {

      
      if (lineIndex >= widthList.length) {
        setLineIndex(0);
        setJumpIndex(0);
      }
  
      const currentLine = widthList[lineIndex];
  
      if (currentLine && currentLine.length >= jumpIndex) {

        setJumpIndex((curIndex) => {
          return curIndex + 1;
        });

  
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

 
  //---------------------------------------------------------------------------------------------------------------------
  const modifiedClass = `flex flex-col text-3xl tracking-widest w-fit h-fit ${textColour}`;

  return (
    <div className="w-3/4">
      <input type="text" className="absolute hidden w-40 h-40 bg-gray-300 left-10"></input>
      <div ref={textDivRef} className={modifiedClass}>
        {finalDiv}
      </div>

      <Cursor translateX={translateX} translateY={translateY} />
    </div>
  );
}

export default TypingArea;

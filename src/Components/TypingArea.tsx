import { useRef, useState, useEffect } from "react";
import Cursor from "./cursor";
import { v4 as uuid } from 'uuid';
import TextSelectorBar from "./TextSelectorBar";




type textAreaProp = { textColour: string; textColourCorrect: string, textColourIncorrect: string};

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

function FinalDiv(wordCount: number, lineCount: number, charCount: number, textColour: string, isPunc: boolean, isNum: boolean, isCaps: boolean) {
  const randomWords = ["apple", "banana", "chocolate", "dog", "elephant", "flower", "guitar", "happiness", "internet", "jazz", "kangaroo", "lighthouse", "mountain", "notebook", "ocean", "penguin", "quasar", "rainbow", "sunset", "tiger", "umbrella", "volcano", "watermelon", "xylophone", "yogurt", "zeppelin"];
  const randomPunc = ["?", "!", ",", ".", "'"]
  // let wordCount = 36; //36
  // let lineCount = 4; //4
  // let charCount = 60; //60
  let wordList = [];
  const spaceChar = "&ensp;"; //8194

  for (let i = 0; i < wordCount; i++) {
    
    let randomWordIndex = Math.floor(Math.random() * randomWords.length);
    let randomPuncIndex = Math.floor(Math.random() * randomPunc.length);
    
    let word = randomWords[randomWordIndex];
    let punctuation = randomPunc[randomPuncIndex];
    let finalWord = word;

    if (isPunc){
      finalWord += punctuation
      if (punctuation === "'")
        finalWord = punctuation + finalWord;
    }


    wordList.push(finalWord);

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
        return <span className={`${textColour}`} key={uuid()} dangerouslySetInnerHTML={{ __html: spaceChar }}></span>;
      } 
      
      else {
        return <span className={`${textColour}`} key={uuid()}>{character}</span>;
      }
    });

    return <span key={uuid()}> {subSpan} </span>;
  });

 

  return finalDiv;
}


  



function TypingArea({ textColour, textColourCorrect, textColourIncorrect }: textAreaProp) {
  
  const CreateFinalDiv = (isPunc: boolean, isNum: boolean, isCaps: boolean) => {
    return FinalDiv(100, 4, 60, textColour, isPunc, isNum, isCaps)
  } //30,10,60

  const [punc, setPunc] = useState(false);
  const [num, setNum] = useState(false);
  const [caps, setCaps] = useState(false);
  
  const [finalDiv, setFinalDiv] = useState(() => CreateFinalDiv(punc, num, caps));
  const [finalDivSpans, setFinalDivSpans] = useState<HTMLSpanElement[][]>([]);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(-134); //-133 -97
  const [widthList, setWidthList] = useState<any>([]);
  const [jumpIndex, setJumpIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  
  const [wordCount, setWordCount] = useState(0);
  const [wpm, setWpm] = useState(0);

  
  const textDivRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  let isWrong = false;
  
  let totalWords = 30;
  let correctChar = 0;




  const moveCursor = () => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px)`;
    }
  };  

  const handlePuncChange = () => {
    setPunc((currPunc) => {
      return !currPunc;
    });
    
    setFinalDiv(() => CreateFinalDiv(punc, num, caps));
    
  }

  const handleNumChange = () => {
    setNum((currNum) => {
      return !currNum;
    });
    
    setFinalDiv(() => CreateFinalDiv(punc, num, caps));
  };

  const handleCapsChange = () => {
    setCaps((currCaps) => {
      return !currCaps;
    });
    
    setFinalDiv(() => CreateFinalDiv(punc, num, caps));
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

      const newFinalDivSpans = Array.from(outerSpans).map((outerSpan: any) => {
        return outerSpan.getElementsByTagName("span"); // Select nested spans within the outer span
      });
   
      setWidthList(newWidthList);
      setFinalDivSpans(newFinalDivSpans);
    }
  
  }, [textDivRef, finalDiv]); 


  

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    
    return () => {
        document.removeEventListener("keydown", handleKeyPress);
    };
    }, [widthList, jumpIndex, lineIndex]);

  
  


  const handleKeyPress = (event: KeyboardEvent) => {
    console.log(jumpIndex, lineIndex);
    const currentLineWidthList = widthList[lineIndex];
    const currentLineText = finalDivSpans[lineIndex];
    
    const curSpan = (currentLineText && jumpIndex < currentLineText.length) ? currentLineText[jumpIndex]: undefined;
    
    if ((event.key === "Enter" && jumpIndex === currentLineWidthList.length) || (curSpan && event.key === curSpan.innerHTML) || (curSpan && event.key === " " && curSpan.innerHTML === String.fromCharCode(8194))) {
      
      if ((curSpan && event.key === " " && curSpan.innerHTML === String.fromCharCode(8194)) || (event.key === "Enter" && jumpIndex === currentLineWidthList.length)){
        setWordCount((curWordCount) => {
          return curWordCount + 1;
        });
      }
      
      
      if(isWrong){
        curSpan?.classList.add(textColourIncorrect);
        curSpan?.classList.remove(textColour);
      }
      
      else
        curSpan?.classList.add(textColourCorrect);  
        curSpan?.classList.remove(textColour);


      isWrong = false      
      correctChar += 1;
      

      
      if (currentLineWidthList && currentLineWidthList.length >= jumpIndex) {

        setJumpIndex((curIndex) => {
          return curIndex + 1;
        });

  
        setTranslateX((prevTranslateX) => {
          return prevTranslateX + currentLineWidthList[jumpIndex];
        });
        
      
       
  
        if (jumpIndex >= currentLineWidthList.length) {
          
          setJumpIndex(0);
          setLineIndex((curLineIndex) => {
            return curLineIndex + 1;
          });
          
          if(lineIndex < widthList.length - 1){
            setTranslateY((prevTranslateY) => {
              return prevTranslateY + 37;
            });

          }
          
          else{
            setFinalDiv(() => CreateFinalDiv(punc, num, caps));
            setTranslateY(-134);
            setJumpIndex(0);
            setLineIndex(0);
            setWordCount(0);

            
          }
          
          setTranslateX(0);      

        }
        
      }
    }

    else{
      isWrong = true
  
    }

    
  };

 
  const modifiedClass = `flex flex-col text-3xl tracking-widest w-fit h-fit`;

  return (
    <div className="w-3/4">
      <TextSelectorBar puncChangeFunc={handlePuncChange}/>
      <div className="text-2xl text-dolphin-btn">{wordCount} / {totalWords}</div>
      <div ref={textDivRef} className={modifiedClass}>
        {...finalDiv}
      </div>

      <Cursor translateX={translateX} translateY={translateY} />
    </div>
  );
}

export default TypingArea;
export {};
import Cursor from "./cursor";

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

        if (line[line.length - 1] === "␣") 
          line.pop();

        lineList.push(line);
        counter = j;
        prevIndex = i;
      }
    }
  }

  return lineList;
}

function cursorPosition(lineList: Array<Array<string>>, )

function TypingArea() {
  const randomWords = [
    "apple",
    "banana",
    "chocolate",
    "dog",
    "elephant",
    "flower",
    "guitar",
    "happiness",
    "internet",
    "jazz",
    "kangaroo",
    "lighthouse",
    "mountain",
    "notebook",
    "ocean",
    "penguin",
    "quasar",
    "rainbow",
    "sunset",
    "tiger",
    "umbrella",
    "volcano",
    "watermelon",
    "xylophone",
    "yogurt",
    "zeppelin",
  ];
  
  let len = randomWords.length;
  let wordCount = 36;
  let lineCount = 4;
  let wordList = [];

  for (let i = 0; i < wordCount; i++) {
    let randomIndex = Math.floor(Math.random() * len) % wordCount;
    wordList.push(randomWords[randomIndex]);
    wordList.push("␣");
    //wordList.push("");


  }

  wordList.pop();
  
  let lineList = LineSeparator(wordList, 60).slice(0,4);
  let finalList = CharacterSeparator(lineList);
  
  let finalDiv = finalList.map((subArray, rowIndex) => {
    let subSpan = subArray.map((character, colIndex) => {
      return (
        <span className="text-xl text-gray-400" key={colIndex}>
          {" "}
          {character}{" "}
        </span>
      );
    });

    return <span key={rowIndex}> {subSpan} </span>;
  });

  // console.log(finalList.slice(0, 2));

  return (
    <div className="w-3/4">
      <input type="text" className="absolute hidden w-40 h-40 bg-gray-300 left-10"></input>
      <div className="flex flex-col w-fit h-fit">{finalDiv}</div>
      {/* <div className="absolute border-[1.5px] h-6 border-green-950 -translate-y-28"></div> */}
      <Cursor />
    </div>
  );
}

export default TypingArea;

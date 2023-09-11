import { useState, useEffect} from "react";

type NumProp = { topLetter?: string; bottomLetter?: string; addClassDiv?: string; addClassText?: string; keyMap: string };
type NumPadProp = { topLetter?: string; bottomLetter?: string; addClassDiv?: string; addClassTopText?: string; addClassBottomText?: string; keyMap: string };
type LetterProp = { letter?: string; addClassText?: string; keyMap: string  };
type SpecialProp = { letter?: string; addClassDiv?: string; keyMap: string };





function NumKey({ topLetter, bottomLetter, addClassDiv, addClassText, keyMap }: NumProp) {

  const[isPressed, setIsPressed] = useState(false);
  
  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(true);
      }
    };

    const keyUp = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [keyMap]);
  
  const modifiedDivClass = `flex flex-col items-center focus:outline-none mt-1 ml-0.5 ${isPressed ? "bg-gray-500": "bg-stone-200"} h-9  ${addClassDiv || "w-9"}`.trim();
  const yPos = `text-xs ${addClassText || ""}`.trim();

  return (
    <div className={modifiedDivClass}>
      <p className={yPos}>{topLetter}</p>
      <p className={yPos}>{bottomLetter}</p>
    </div>
  );
}



function LetterKey({ letter, addClassText, keyMap }: LetterProp) {

  const[isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(true);
      }
    };

    const keyUp = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [keyMap]);

  const modifiedDivClass = `flex items-center mt-1 ml-0.5 h-9 w-9 focus:outline-none ${isPressed ? "bg-gray-500": "bg-stone-200"}`.trim();
  const modifiedTextClass = `w-full text-xs text-center ${addClassText || ""}`.trim();
  
  return (
    <div className={modifiedDivClass} >
      <p className={modifiedTextClass}>{letter}</p>
    </div>
  );
}



function SpecialKey({ letter, addClassDiv, keyMap }: SpecialProp) {

  const[isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === keyMap) {
        event.preventDefault();
        setIsPressed(true);
      }
    };

    const keyUp = (event: any) => {
      if (event.code === keyMap) {
        event.preventDefault();
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [keyMap]);
  

  const modifiedDivClass = `flex items-center mt-1 ml-0.5 h-9 focus:outline-none ${addClassDiv || ""} ${isPressed ? "bg-gray-500": "bg-zinc-300"}`.trim();
  return (
    <div className={modifiedDivClass}>
      <p className="w-full text-xs text-center">{letter}</p>
    </div>
  );
}

function ArrowKey({ letter, addClassText, keyMap }: LetterProp) {
  
  const[isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(true);
      }
    };

    const keyUp = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [keyMap]);

  
  const modifiedTextClass = `w-full text-2xl text-center ${addClassText || ""}`.trim();
  const modifiedDivClass = `flex items-center mt-1 ml-0.5 h-9 w-9 focus:outline-none ${isPressed ? "bg-gray-500": "bg-stone-200"}`.trim();
  
  return (
    <div className={modifiedDivClass}>
      <p className={modifiedTextClass}>{letter}</p>
    </div>
  );
}

function NumPadKey({ topLetter, bottomLetter, addClassDiv, addClassTopText, addClassBottomText, keyMap}: NumPadProp) {

  const[isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const keyDown = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(true);
      }
    };

    const keyUp = (event: any) => {
      if (event.code === keyMap) {
        setIsPressed(false);
      }
    };

    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);

    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    };
  }, [keyMap]);

  
  const modifiedDivClass = `flex flex-col items-center mt-1 ml-0.5 focus:outline-none ${addClassDiv || "h-9 w-9"} ${isPressed ? "bg-gray-500": "bg-stone-200"}`.trim();
  const classTopText = `text-sm ${addClassTopText || ""}`.trim();
  const classBottomText = `text-xs ${addClassBottomText || ""}`.trim();
  

  return (
    <div className={modifiedDivClass}>
      <p className={classTopText}>{topLetter}</p>
      <p className={classBottomText}>{bottomLetter}</p>
    </div>
  );
}


export { NumKey, LetterKey, SpecialKey, ArrowKey, NumPadKey };

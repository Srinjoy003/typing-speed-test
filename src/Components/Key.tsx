type NumProp = { topLetter?: string; bottomLetter?: string; addClassDiv?: string; addClassText?: string };
type NumPadProp = { topLetter?: string; bottomLetter?: string; addClassDiv?: string; addClassTopText?: string; addClassBottomText?: string };
type LetterProp = { letter?: string; addClassText?: string  };
type SpecialProp = { letter?: string; addClassDiv?: string };

function NumKey({ topLetter, bottomLetter, addClassDiv, addClassText }: NumProp) {
  
  const modifiedClass = `flex flex-col items-center mt-1 ml-0.5 bg-stone-200 h-9  ${addClassDiv || "w-9"}`.trim();

  const yPos = `text-xs ${addClassText || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <p className={yPos}>{topLetter}</p>
      <p className={yPos}>{bottomLetter}</p>
    </div>
  );
}

function LetterKey({ letter, addClassText }: LetterProp) {
  const modifiedClass = `w-full text-xs text-center ${addClassText || ""}`.trim();
  
  return (
    <div className="flex items-center mt-1 ml-0.5 bg-stone-200 h-9 w-9">
      <p className={modifiedClass}>{letter}</p>
    </div>
  );
}

function SpecialKey({ letter, addClassDiv }: SpecialProp) {
  const modifiedClass = `flex items-center mt-1 ml-0.5 bg-zinc-300 h-9 ${addClassDiv || ""}`.trim();
  return (
    <div className={modifiedClass}>
      <p className="w-full text-xs text-center">{letter}</p>
    </div>
  );
}

function ArrowKey({ letter, addClassText }: LetterProp) {
  const modifiedClass = `w-full text-2xl text-center ${addClassText || ""}`.trim();
  
  return (
    <div className="flex items-center mt-1 ml-0.5 bg-stone-200 h-9 w-9">
      <p className={modifiedClass}>{letter}</p>
    </div>
  );
}

function NumPadKey({ topLetter, bottomLetter, addClassDiv, addClassTopText, addClassBottomText}: NumPadProp) {
  
  const modifiedClass = `flex flex-col items-center mt-1 ml-0.5 bg-stone-200  ${addClassDiv || "h-9 w-9"}`.trim();
  const classTopText = `text-sm ${addClassTopText || ""}`.trim();
  const classBottomText = `text-xs ${addClassBottomText || ""}`.trim();
  

  return (
    <div className={modifiedClass}>
      <p className={classTopText}>{topLetter}</p>
      <p className={classBottomText}>{bottomLetter}</p>
    </div>
  );
}

export { NumKey, LetterKey, SpecialKey, ArrowKey, NumPadKey };

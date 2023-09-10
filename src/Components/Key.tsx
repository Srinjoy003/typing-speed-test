type NumProp = {
  topLetter?: string;
  bottomLetter?: string;
  addClassDiv?: string;
  addClassText?: string;
};
type LetterProp = { letter?: string };
type SpecialProp = { letter?: string; addClassDiv?: string };

function NumKey({
  topLetter,
  bottomLetter,
  addClassDiv,
  addClassText,
}: NumProp) {
  const modifiedClass =
    `flex flex-col items-center mt-1 ml-0.5 bg-stone-200 h-9 ${
      addClassDiv || "w-9"
    }`.trim();
  const yPos = `text-xs ${addClassText || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <p className={yPos}>{topLetter}</p>
      <p className={yPos}>{bottomLetter}</p>
    </div>
  );
}

function LetterKey({ letter }: LetterProp) {
  return (
    <div className="flex items-center mt-1 ml-0.5 bg-stone-200 h-9 w-9">
      <p className="w-full text-xs text-center">{letter}</p>
    </div>
  );
}

function SpecialKey({ letter, addClassDiv }: SpecialProp) {
  const modifiedClass = `flex items-center mt-1 ml-0.5 bg-zinc-300 h-9 ${
    addClassDiv || ""
  }`.trim();
  return (
    <div className={modifiedClass}>
      <p className="w-full text-xs text-center">{letter}</p>
    </div>
  );
}

export { NumKey, LetterKey, SpecialKey };

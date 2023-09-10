import { NumKey, LetterKey, SpecialKey, ArrowKey, NumPadKey } from "./Key";

type AddClassProp = { addClass?: string };

function ArrowKeyPad({ addClass }: AddClassProp) {
  const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <ArrowKey letter="🠁" />

      <div className="flex flex-row ">
        <ArrowKey letter="🠀" />
        <ArrowKey letter="🠃" />
        <ArrowKey letter="🠂" />
      </div>
    </div>
  );
}

function FunctionKeyPad({ addClass }: AddClassProp) {
  // const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <NumKey topLetter="Insert" addClassText="text-[12px]" />
        <NumKey topLetter="Home" addClassText="text-[12px]" />
        <NumKey topLetter="Page" bottomLetter="Up" addClassText="text-[12px]" />
      </div>

      <div className="flex flex-row">
        <NumKey topLetter="Delete" addClassText="text-[12px]" />
        <NumKey topLetter="End" addClassText="text-[12px]" />
        <NumKey topLetter="Page" bottomLetter="Down" addClassText="text-[12px]" />
      </div>
    </div>
  );
}

function NumPad({ addClass }: AddClassProp) {
  // const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-fit">
        <NumKey topLetter="Num" bottomLetter="Lock" />
        <LetterKey letter="/" />
        <LetterKey letter="*" />
        <LetterKey letter="-" />
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="7" bottomLetter="Home" />
            <NumPadKey topLetter="8" bottomLetter="🠁" />
            <NumPadKey topLetter="9" bottomLetter="PgUp" />
          </div>

          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="4" bottomLetter="🠀" />
            <NumPadKey topLetter="5" />
            <NumPadKey topLetter="6" bottomLetter="🠂" />
          </div>
        </div>
        <NumPadKey bottomLetter="+" addClassDiv="h-18 w-9" addClassBottomText="translate-y-3" />
      </div>

      <div className="flex flex-row"> 
      
        <div className="flex flex-col">
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="1" bottomLetter="End" />
            <NumPadKey topLetter="2" bottomLetter="🠃" />
            <NumPadKey topLetter="3" bottomLetter="PgDn" />
          </div>
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="0" bottomLetter="Ins" addClassDiv="h-9 w-[74px]" addClassTopText="text-left"/>
            <NumPadKey topLetter="2" bottomLetter="🠃" />
          </div>
        </div>
        
        <NumPadKey bottomLetter="Enter" addClassDiv="h-18 w-9" addClassBottomText="translate-y-3" />
        
      </div>

        
     
    </div>
  );
}

export { ArrowKeyPad, FunctionKeyPad, NumPad };

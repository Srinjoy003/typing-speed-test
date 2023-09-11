import { NumKey, LetterKey, SpecialKey, ArrowKey, NumPadKey } from "./Key";

type AddClassProp = { addClass?: string };

function ArrowKeyPad({ addClass }: AddClassProp) {
  const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <ArrowKey letter="🠁" keyMap="ArrowUp"/>

      <div className="flex flex-row ">
        <ArrowKey letter="🠀" keyMap="ArrowLeft"/>
        <ArrowKey letter="🠃" keyMap="ArrowDown"/>
        <ArrowKey letter="🠂" keyMap="ArrowRight"/>
      </div>
    </div>
  );
}

function FunctionKeyPad({ addClass }: AddClassProp) {
  // const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <NumKey topLetter="Insert" addClassText="text-[12px]" keyMap="Insert"/>
        <NumKey topLetter="Home" addClassText="text-[12px]" keyMap="Home"/>
        <NumKey topLetter="Page" bottomLetter="Up" addClassText="text-[12px]" keyMap="PageUp"/>
      </div>

      <div className="flex flex-row">
        <NumKey topLetter="Delete" addClassText="text-[12px]" keyMap="Delete"/>
        <NumKey topLetter="End" addClassText="text-[12px]" keyMap="End"/>
        <NumKey topLetter="Page" bottomLetter="Down" addClassText="text-[12px]" keyMap="PageDown"/>
      </div>
    </div>
  );
}

function NumPad({ addClass }: AddClassProp) {
  // const modifiedClass = `flex flex-col items-center w-fit ${addClass || ""}`.trim();

  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-fit">
        <NumKey topLetter="Num" bottomLetter="Lock" keyMap="NumLock"/>
        <LetterKey letter="/" keyMap="NumpadDivide"/>
        <LetterKey letter="*" keyMap="NumpadMultiply"/>
        <LetterKey letter="-" keyMap="NumpadSubtract"/>
      </div>

      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="7" bottomLetter="Home" keyMap="Numpad7"/>
            <NumPadKey topLetter="8" bottomLetter="🠁" keyMap="Numpad8"/>
            <NumPadKey topLetter="9" bottomLetter="PgUp" keyMap="Numpad9"/>
          </div>

          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="4" bottomLetter="🠀" keyMap="Numpad4"/>
            <NumPadKey topLetter="5" keyMap="Numpad5"/>
            <NumPadKey topLetter="6" bottomLetter="🠂" keyMap="Numpad6"/>
          </div>
        </div>
        <NumPadKey bottomLetter="+" addClassDiv="h-18 w-9" addClassBottomText="translate-y-3" keyMap="NumpadAddition"/>
      </div>

      <div className="flex flex-row"> 
      
        <div className="flex flex-col">
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="1" bottomLetter="End" keyMap="Numpad1"/>
            <NumPadKey topLetter="2" bottomLetter="🠃" keyMap="Numpad2"/>
            <NumPadKey topLetter="3" bottomLetter="PgDn" keyMap="Numpad3"/>
          </div>
          <div className="flex flex-row w-fit">
            <NumPadKey topLetter="0" bottomLetter="Ins" addClassDiv="h-9 w-[74px]" addClassTopText="text-left"keyMap="Numpad0"/>
            <NumPadKey topLetter="2" bottomLetter="🠃" keyMap="Numpad2"/>
          </div>
        </div>
        
        <NumPadKey bottomLetter="Enter" addClassDiv="h-18 w-9" addClassBottomText="translate-y-3" keyMap="NumpadEnter"/>
        
      </div>

        
     
    </div>
  );
}

export { ArrowKeyPad, FunctionKeyPad, NumPad };

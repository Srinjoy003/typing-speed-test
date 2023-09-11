import { NumKey, LetterKey, SpecialKey } from "./Key";

type AddClassProp = { addClass?: string };

function MainKeyboard({ addClass }: AddClassProp) {
  const modifiedClass = `h-fit w-fit ${addClass || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <div className="flex flex-row w-fit">
        <NumKey topLetter="~" bottomLetter="`" keyMap="~"/>
        <NumKey topLetter="!" bottomLetter="1" keyMap="Digit1"/>
        <NumKey topLetter="@" bottomLetter="2" keyMap="Digit2"/>
        <NumKey topLetter="#" bottomLetter="3" keyMap="Digit3"/>
        <NumKey topLetter="$" bottomLetter="4" keyMap="Digit4"/>
        <NumKey topLetter="%" bottomLetter="5" keyMap="Digit5"/>
        <NumKey topLetter="^" bottomLetter="6" keyMap="Digit6"/>
        <NumKey topLetter="&" bottomLetter="7" keyMap="Digit7"/>
        <NumKey topLetter="*" bottomLetter="8" keyMap="Digit8"/>
        <NumKey topLetter="(" bottomLetter="9" keyMap="Digit9"/>
        <NumKey topLetter=")" bottomLetter="0" keyMap="Digit0"/>
        <NumKey topLetter="_" bottomLetter="-" keyMap="Digit"/>
        <NumKey topLetter="+" bottomLetter="=" keyMap="Add"/>
        <SpecialKey letter="Backspace" addClassDiv="w-16" keyMap="BackSpace"/>
      </div>

      <div className="flex flex-row w-fit">
        <SpecialKey letter="Tab" addClassDiv="w-12" keyMap="Tab"/>
        <LetterKey letter="Q" keyMap="KeyQ"/>
        <LetterKey letter="W" keyMap="KeyW"/>
        <LetterKey letter="E" keyMap="KeyE"/>
        <LetterKey letter="R" keyMap="KeyR"/>
        <LetterKey letter="T" keyMap="KeyT"/>
        <LetterKey letter="Y" keyMap="KeyY"/>
        <LetterKey letter="U" keyMap="KeyU"/>
        <LetterKey letter="I" keyMap="KeyI"/>
        <LetterKey letter="O" keyMap="KeyO"/>
        <LetterKey letter="P" keyMap="KeyP"/>
        <NumKey topLetter="{" bottomLetter="[" keyMap="{"/>
        <NumKey topLetter="}" bottomLetter="]" keyMap="}"/>
        <NumKey topLetter="|" bottomLetter="\" addClassDiv="w-[52px]" addClassText="-translate-x-3" keyMap="|"/>
      </div>
      <div className="flex flex-row w-fit">
        <SpecialKey letter="Caps Lock" addClassDiv="w-16" keyMap="CapsLock"/>
        <LetterKey letter="A" keyMap="KeyA"/>
        <LetterKey letter="S" keyMap="KeyS"/>
        <LetterKey letter="D" keyMap="KeyD"/>
        <LetterKey letter="F" keyMap="KeyF"/>
        <LetterKey letter="G" keyMap="KeyG"/>
        <LetterKey letter="H" keyMap="KeyH"/>
        <LetterKey letter="J" keyMap="KeyJ"/>
        <LetterKey letter="K" keyMap="KeyK"/>
        <LetterKey letter="L" keyMap="KeyL"/>
        <NumKey topLetter=":" bottomLetter=";" keyMap="Semicolon"/>
        <NumKey topLetter='"' bottomLetter="'" keyMap="Quote"/>
        <SpecialKey letter="Enter" addClassDiv="w-[74px]" keyMap="Enter"/>
      </div>
      <div className="flex flex-row w-fit">
        <SpecialKey letter="Shift" addClassDiv="w-20" keyMap="ShiftLeft"/>
        <LetterKey letter="Z" keyMap="KeyZ"/>
        <LetterKey letter="X" keyMap="KeyX"/>
        <LetterKey letter="C" keyMap="KeyC"/>
        <LetterKey letter="V" keyMap="KeyV"/>
        <LetterKey letter="B" keyMap="KeyB"/>
        <LetterKey letter="N"keyMap="KeyN" />
        <LetterKey letter="M" keyMap="KeyM"/>
        <NumKey topLetter="<" bottomLetter="," keyMap="LessThan"/>
        <NumKey topLetter=">" bottomLetter="." keyMap="GreaterThan"/>
        <NumKey topLetter="?" bottomLetter="/" keyMap="QuestionMark"/>
        <SpecialKey letter="Shift" addClassDiv="w-24" keyMap="SHiftRight"/>
      </div>

      <div className="flex flex-row w-fit">
        <SpecialKey letter="Ctrl" addClassDiv="w-14" keyMap="ControlLeft"/>
        <SpecialKey letter="Alt" addClassDiv="w-14" keyMap="AltLeft"/>
        <NumKey addClassDiv="w-80" keyMap="Space"/>
        <SpecialKey letter="Alt" addClassDiv="w-14"keyMap="AltRight" />
        <SpecialKey letter="Ctrl" addClassDiv="w-[62px]" keyMap="ControlRight"/>
      </div>
    </div>
  );
}

export default MainKeyboard;

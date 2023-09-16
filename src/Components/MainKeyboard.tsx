import { NumKey, LetterKey, SpecialKey } from "./Key";

type AddClassProp = { addClass?: string; textTheme?: string; theme: string; funcTheme: string; pressedTheme: string, pressedTextTheme?: string };

function MainKeyboard({ addClass, theme, funcTheme, textTheme, pressedTheme, pressedTextTheme}: AddClassProp) {
  const modifiedClass = `h-fit w-fit ${addClass || ""}`.trim();

  return (
    <div className={modifiedClass}>
      <div className="flex flex-row w-fit">
        <NumKey topLetter="~" bottomLetter="`" keyMap="Backquote" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="!" bottomLetter="1" keyMap="Digit1" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="@" bottomLetter="2" keyMap="Digit2" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="#" bottomLetter="3" keyMap="Digit3" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="$" bottomLetter="4" keyMap="Digit4" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="%" bottomLetter="5" keyMap="Digit5" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="^" bottomLetter="6" keyMap="Digit6" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="&" bottomLetter="7" keyMap="Digit7" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="*" bottomLetter="8" keyMap="Digit8" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="(" bottomLetter="9" keyMap="Digit9" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter=")" bottomLetter="0" keyMap="Digit0" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="_" bottomLetter="-" keyMap="Minus" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="+" bottomLetter="=" keyMap="Equal" theme={theme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Backspace" addClassDiv="w-20" keyMap="Backspace" theme={funcTheme} pressedTheme={pressedTheme} />
      </div>

      <div className="flex flex-row w-fit">
        <SpecialKey letter="Tab" addClassDiv="w-14" keyMap="Tab" theme={funcTheme} pressedTheme={pressedTheme} />
        <LetterKey letter="Q" keyMap="KeyQ" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="W" keyMap="KeyW" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="E" keyMap="KeyE" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="R" keyMap="KeyR" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="T" keyMap="KeyT" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="Y" keyMap="KeyY" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="U" keyMap="KeyU" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="I" keyMap="KeyI" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="O" keyMap="KeyO" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="P" keyMap="KeyP" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="{" bottomLetter="[" keyMap="BracketLeft" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="}" bottomLetter="]" keyMap="BracketRight" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="|" bottomLetter="\" addClassDiv="w-[64px]" addClassText="-translate-x-3" keyMap="Backslash" theme={theme} pressedTheme={pressedTheme} />
      </div>
      <div className="flex flex-row w-fit">
        <SpecialKey letter="Caps Lock" addClassDiv="w-16" keyMap="CapsLock" theme={funcTheme} pressedTheme={pressedTheme} />
        <LetterKey letter="A" keyMap="KeyA" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="S" keyMap="KeyS" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="D" keyMap="KeyD" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="F" keyMap="KeyF" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="G" keyMap="KeyG" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="H" keyMap="KeyH" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="J" keyMap="KeyJ" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="K" keyMap="KeyK" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="L" keyMap="KeyL" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter=":" bottomLetter=";" keyMap="Semicolon" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter='"' bottomLetter="'" keyMap="Quote" theme={theme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Enter" addClassDiv="w-[98px]" keyMap="Enter" theme={funcTheme} pressedTheme={pressedTheme} />
      </div>
      <div className="flex flex-row w-fit">
        <SpecialKey letter="Shift" addClassDiv="w-24" keyMap="ShiftLeft" theme={funcTheme} pressedTheme={pressedTheme} />
        <LetterKey letter="Z" keyMap="KeyZ" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="X" keyMap="KeyX" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="C" keyMap="KeyC" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="V" keyMap="KeyV" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="B" keyMap="KeyB" theme={theme} pressedTheme={pressedTheme} />
        <LetterKey letter="N"keyMap="KeyN" theme={theme} pressedTheme={pressedTheme}  />
        <LetterKey letter="M" keyMap="KeyM" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="<" bottomLetter="," keyMap="Comma" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter=">" bottomLetter="." keyMap="Period" theme={theme} pressedTheme={pressedTheme} />
        <NumKey topLetter="?" bottomLetter="/" keyMap="Slash" theme={theme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Shift" addClassDiv="w-[108px]" keyMap="ShiftRight" theme={funcTheme} pressedTheme={pressedTheme} />
      </div>

      <div className="flex flex-row w-fit">
        <SpecialKey letter="Ctrl" addClassDiv="w-16" keyMap="ControlLeft" theme={funcTheme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Alt" addClassDiv="w-14" keyMap="AltLeft" theme={funcTheme} pressedTheme={pressedTheme} />
        <NumKey addClassDiv="w-96" keyMap="Space" theme={funcTheme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Alt" addClassDiv="w-14"keyMap="AltRight" theme={funcTheme} pressedTheme={pressedTheme} />
        <SpecialKey letter="Ctrl" addClassDiv="w-[58px]" keyMap="ControlRight" theme={funcTheme} pressedTheme={pressedTheme} />
      </div>
    </div>
  );
}

export default MainKeyboard;

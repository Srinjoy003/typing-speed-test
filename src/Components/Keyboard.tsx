import { NumKey, LetterKey, SpecialKey } from "./Key";

function KeyBoard() {
  return (
    <div className="flex flex-col w-3/4 bg-gray-600 h-96 ">
      <div className="h-fit w-fit">
        <div className="flex flex-row w-fit">
          <NumKey topLetter="~" bottomLetter="`" />
          <NumKey topLetter="!" bottomLetter="1" />
          <NumKey topLetter="@" bottomLetter="2" />
          <NumKey topLetter="#" bottomLetter="3" />
          <NumKey topLetter="$" bottomLetter="4" />
          <NumKey topLetter="%" bottomLetter="5" />
          <NumKey topLetter="^" bottomLetter="6" />
          <NumKey topLetter="&" bottomLetter="7" />
          <NumKey topLetter="*" bottomLetter="8" />
          <NumKey topLetter="(" bottomLetter="9" />
          <NumKey topLetter=")" bottomLetter="0" />
          <NumKey topLetter="_" bottomLetter="-" />
          <NumKey topLetter="+" bottomLetter="=" />
          <SpecialKey letter="Backspace" addClassDiv="w-16" />
        </div>

        <div className="flex flex-row w-fit">
          <SpecialKey letter="Tab" addClassDiv="w-12" />
          <LetterKey letter="Q" />
          <LetterKey letter="W" />
          <LetterKey letter="E" />
          <LetterKey letter="R" />
          <LetterKey letter="T" />
          <LetterKey letter="Y" />
          <LetterKey letter="U" />
          <LetterKey letter="I" />
          <LetterKey letter="O" />
          <LetterKey letter="P" />
          <NumKey topLetter="{" bottomLetter="[" />
          <NumKey topLetter="}" bottomLetter="]" />
          <NumKey
            topLetter="|"
            bottomLetter="\"
            addClassDiv="w-[52px]"
            addClassText="-translate-x-3"
          />
        </div>
        <div className="flex flex-row w-fit">
          <SpecialKey letter="Caps Lock" addClassDiv="w-16" />
          <LetterKey letter="A" />
          <LetterKey letter="S" />
          <LetterKey letter="D" />
          <LetterKey letter="F" />
          <LetterKey letter="G" />
          <LetterKey letter="H" />
          <LetterKey letter="J" />
          <LetterKey letter="K" />
          <LetterKey letter="L" />
          <NumKey topLetter=":" bottomLetter=";" />
          <NumKey topLetter='"' bottomLetter="'" />
          <SpecialKey letter="Enter" addClassDiv="w-[74px]" />
        </div>
        <div className="flex flex-row w-fit">
          <SpecialKey letter="Shift" addClassDiv="w-20" />
          <LetterKey letter="Z" />
          <LetterKey letter="X" />
          <LetterKey letter="C" />
          <LetterKey letter="V" />
          <LetterKey letter="B" />
          <LetterKey letter="N" />
          <LetterKey letter="M" />
          <NumKey topLetter="<" bottomLetter="," />
          <NumKey topLetter=">" bottomLetter="." />
          <NumKey topLetter="?" bottomLetter="/" />
          <SpecialKey letter="Shift" addClassDiv="w-24" />
        </div>

        <div className="flex flex-row w-fit">
          <SpecialKey letter="Ctrl" addClassDiv="w-14" />
          <SpecialKey letter="Alt" addClassDiv="w-14" />
          <NumKey addClassDiv="w-80" />
          <SpecialKey letter="Alt" addClassDiv="w-14" />
          <SpecialKey letter="Ctrl" addClassDiv="w-[62px]" />
        </div>
      </div>
    </div>
  );
}

export default KeyBoard;

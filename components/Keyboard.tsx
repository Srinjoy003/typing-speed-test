import MainKeyboard from "./MainKeyboard";
import { ArrowKeyPad, FunctionKeyPad, NumPad } from "./SmallKeySections";

type AddClassProp = { addClass?: string; theme: string; funcTheme: string; pressedTheme: string; backgroundTheme: string };

function Keyboard({ addClass, theme, funcTheme, pressedTheme, backgroundTheme }: AddClassProp) {
  const modifiedClass = `flex flex-col items-center mt-1 ml-0.5 bg-stone-200 h-9 ${addClass || ""}`.trim();
  const modifiedDivClass = `flex flex-row justify-center items-center w-[1000px] gap-6 h-[245px] rounded-md scale-75 ${backgroundTheme}`;

  return (
    <div className={modifiedDivClass}>
      <MainKeyboard addClass="" theme={theme} funcTheme={funcTheme} pressedTheme={pressedTheme} />

      <div className="flex flex-col gap-10 ">
        <FunctionKeyPad addClass="" theme={theme} pressedTheme={pressedTheme} />
        <ArrowKeyPad addClass="" theme={theme} pressedTheme={pressedTheme} />
      </div>

      <NumPad addClass="" theme={theme} pressedTheme={pressedTheme} />
    </div>
  );
}

export default Keyboard;

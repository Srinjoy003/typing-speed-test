import MainKeyboard from "./MainKeyboard";
import {ArrowKeyPad, FunctionKeyPad, NumPad} from "./SmallKeySections";

type AddClassProp = { addClass?: string };

function Keyboard({ addClass }: AddClassProp) {
  const modifiedClass = `flex flex-col items-center mt-1 ml-0.5 bg-stone-200 h-9 ${addClass || ""}`.trim();

  return (
    <div className="flex flex-row w-3/5 gap-10 bg-gray-600 h-52">
      <MainKeyboard addClass="" theme="bg-stone-200" funcTheme="bg-zinc-300" pressedTheme="bg-gray-500"/>

      <div className="flex flex-col gap-10">
        <FunctionKeyPad addClass="" theme="bg-stone-200" pressedTheme="bg-gray-500"/>
        <ArrowKeyPad addClass="" theme="bg-stone-200" pressedTheme="bg-gray-500"/>
      </div>
      
      <NumPad addClass="" theme="bg-stone-200" pressedTheme="bg-gray-500"/>
    </div>
  );
}

export default Keyboard;

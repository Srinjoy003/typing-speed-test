import MainKeyboard from "./MainKeyboard";
import {ArrowKeyPad, FunctionKeyPad, NumPad} from "./SmallKeySections";

type AddClassProp = { addClass?: string };

function Keyboard({ addClass }: AddClassProp) {
  const modifiedClass = `flex flex-col items-center mt-1 ml-0.5 bg-stone-200 h-9 ${addClass || ""}`.trim();

  return (
    <div className="flex flex-row w-3/4 gap-10 bg-gray-600 h-96">
      <MainKeyboard />
      <ArrowKeyPad />
      <FunctionKeyPad />
      <NumPad />
    </div>
  );
}

export default Keyboard;

import TypingArea from "./Components/TypingArea.tsx";
import Keyboard from "./Components/Keyboard.tsx";
import { NumKey } from "./Components/Key.tsx";


function App() {

  let colour1 = "bg-amber-50";
  
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 bg-dolphin-bg">
      <TypingArea textColour="text-dolphin-dull"/>
      <Keyboard theme="bg-dolphin-bright" funcTheme="bg-dolphin-bright" pressedTheme="bg-dolphin-dull" backgroundTheme=""/>
    </div>
  );
}

export default App;

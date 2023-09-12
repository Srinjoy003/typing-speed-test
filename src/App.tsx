import TypingArea from "./Components/TypingArea.tsx";
import Keyboard from "./Components/Keyboard.tsx";
import { NumKey } from "./Components/Key.tsx";


function App() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen gap-10 bg-amber-50">
      <TypingArea />
      <Keyboard />
    </div>
  );
}

export default App;

import TypingArea from "./Components/TypingArea.tsx";
import Keyboard from "./Components/Keyboard.tsx";


function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-amber-50">
      {/* <TypingArea /> */}
      <Keyboard />
    </div>
  );
}

export default App;

import React from "react";
import TypingArea from "@/components/TypingArea";
import Keyboard from "@/components/Keyboard";
import Navbar from "@/components/Navbar";

function Home() {
  return (
    <div className="flex flex-row items-center justify-end w-screen h-screen gap-28 bg-dolphin-bg">
      <div className="flex flex-col items-center justify-start gap-28 translate-y-10"> 
        <TypingArea textColour="text-dolphin-dull" textColourCorrect="text-dolphin-bright" textColourIncorrect="text-dolphin-wrong" selectorDivColour="bg-dolphin-navbar"/>
          <Keyboard theme="bg-dolphin-bg" funcTheme="bg-dolphin-bg" pressedTheme="bg-dolphin-dull" backgroundTheme="bg-dolphin-navbar" />
      </div>
      <Navbar textColour="text-dolphin-dull" backgroundTheme="bg-dolphin-navbar" svgFill="fill-dolphin-dull"/>
    </div>
     
  );
}

export default Home;


{/* <TypingArea textColour="text-dolphin-dull" textColourCorrect="text-dolphin-bright" textColourIncorrect="text-dolphin-wrong" />
        <Keyboard theme="bg-dolphin-bright" funcTheme="bg-dolphin-bright" pressedTheme="bg-dolphin-dull" backgroundTheme="bg-dolphin-bg" />
      </div>
    </div> */}
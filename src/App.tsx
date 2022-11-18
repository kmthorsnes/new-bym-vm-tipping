import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Cash from "./cash/cash";

function App() {
  return (
    <div className="App">
      <div className=" h-screen w-screen p-2">
        <div className="border-red-600 flexlex-col h-full w-full rounded border-4 border-wcbeige-default p-2">
          <Cash />
          <div className="flex">Fotballspiller</div>

          <div className="">Liste over spillere</div>
          <div className="flex">Siste resultater</div>
          <div className="flex">Neste kamper</div>

          <div className="flex">Kommune logo</div>
          <span className="flex">sist oppdatert</span>
          <div className="flex">Wc Logo</div>
        </div>
      </div>
    </div>
  );
}

export default App;

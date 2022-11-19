import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

import Nintendowcspiller from "./nintendowcspiller/nintendowcspiller";
import Oklogo from "./oklogo/Oklogo";
import TakeMyMoney from "./takemymoney/Takemymoney";
import data from "./data/data.json";
import Wclogo from "./wclogo/Wclogo";

function App() {
  return (
    <div className="App">
      <div className=" h-screen w-screen p-2">
        <div className="border-red-600 flex h-full w-full flex-col justify-between rounded border-4 border-wcbeige-default p-2 ">
          <div className="flex w-full justify-between justify-items-end">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          <div className="flex w-full justify-between">
            <div className="flex">
              <ul>
                {data.scores
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item: { name: string; ranking: number }) => (
                    <li>
                      {item.ranking}. {item.name}{" "}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex">Siste resultater</div>
            <div className="flex">Neste kamper</div>
          </div>
          <div className="flex text-wcbeige-default justify-between items-center h-14">
            <Oklogo />
            <span className="flex ">Sist oppdatert: 20.11.22</span>
            <Wclogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

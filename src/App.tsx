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
        <div className="border-red-600 flex h-full w-full flex-col  rounded border-4 border-wcbeige-default p-2 ">
          <div className="flex w-full justify-between justify-items-end">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          <div className="flex w-full justify-between text-2xl">
            <div className="flex">
              <ul>
                {data.scores
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item: { name: string; ranking: number }) => (
                    <li key={item.name}>
                      {item.ranking}. {item.name}{" "}
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-center">Ledelse</p>
              <ul>
                <ul>
                  {data.scores
                    .sort(function (a, b) {
                      return a.ranking - b.ranking;
                    })
                    .slice(0, 1)
                    .map(
                      (item: {
                        name: string;
                        ranking: number;
                        imgUrl: any;
                      }) => (
                        <li key={item.name}>
                          <div className="relative">
                            <img className="h-48" src={item.imgUrl.card} alt="" />
                          </div>
                        </li>
                      )
                    )}
                </ul>
              </ul>
            </div>
            <div className="flex flex-col">
              <div className="mb-2">
                <p>Siste resultater:</p>
                <ul>
                  <li>Qatar - Ecuador</li>
                </ul>
              </div>
              <div className="">
                <p>Neste kamper:</p>
                <ul>
                  <li>England - Iran</li>
                  <li>Senegal - Nederland</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex self-end h-14 items-center justify-between text-wcbeige-default">
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

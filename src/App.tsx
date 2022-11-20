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

          <div className="grid grow w-full grid-cols-3 justify-between text-2xl">
            <div className="m-4 mt-12 ml-12 flex">
              <ul>
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .map(
                    (item: {
                      name: string;
                      ranking: number;
                      score: Array<Number> | any;
                    }) => (
                      <li key={item.name}>
                        {item.ranking}. {item.name} - {item.score[item.score.length - 1]}
                      </li>
                    )
                  )}
              </ul>
            </div>
            <div className="m-4 flex flex-col ">

              <div className="flex justify-center">
                <ul>
                  {data.scores
                    .sort(function (a, b) {
                      return a.ranking - b.ranking;
                    })
                    .slice(0, 4)
                    .map(
                      (item: {
                        name: string;
                        ranking: number;
                        imgUrl: any;
                      }) => (
                        <li key={item.name}>
                          <div className="relative">
                            <img
                              className="h-48 scale-90 hover:scale-100 ease-in duration-500"
                              src={`/profiles/card/${item.name
                                .toLowerCase()
                                .replace(/\s/g, "")}.png`}
                              alt=""
                            />
                          </div>
                        </li>
                      )
                    )}
                </ul>
              </div>
            </div>
            <div className="mt-12 ml-12 flex flex-col ">
              <div className="m-4 ">
                <p>Siste resultater:</p>
                <ul>
                  <li>Qatar 0 - 2 Ecuador</li>
                </ul>
              </div>
              <div className="m-4">
                <p>Neste kamper:</p>
                <ul>
                  <li>England - Iran</li>
                  <li>Senegal - Nederland</li>
                  <li>USA - Wales</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex h-14 w-full items-center justify-between self-end text-wcbeige-default">
            <Oklogo />
            <span className="text-center">Sist oppdatert: 20.11.22</span>
            <Wclogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

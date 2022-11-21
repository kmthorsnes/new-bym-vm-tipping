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
      <div className=" flex min-h-screen w-full min-w-full p-2">
        <div className="border-red-600 flex h-full min-h-screen w-full min-w-full flex-col grow rounded border-4 border-wcbeige-default p-2 ">
          <div className="flex w-full justify-between justify-items-end">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          {/* <div className="grid w-full grow grid-cols-3 justify-between text-2xl">
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
                        {item.ranking}. {item.name}:{" "}
                        {item.score.reduce((a: number, b: number) => a + b, 0)}{" "}
                        ({item.score[item.score.length - 1]})
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
                    .slice(0, 3)
                    .map(
                      (item: {
                        name: string;
                        ranking: number;
                        imgUrl: any;
                      }) => (
                        <li key={item.name}>
                          <div className="relative">
                            <img
                              className="h-48 scale-90 duration-500 ease-in hover:scale-100"
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
                  <li>England 6 - 2 Iran*</li>
                  <li>Senegal 0 - 2 Nederland*</li>
                  <li>USA 1 - 1 Wales</li>
                </ul>
              </div>
              <div className="m-4">
                <p>Neste kamper:</p>
                <ul>
                  <li>11:00 : Argentina - Saudi Arabia*</li>
                  <li>14:00 : Danmark - Tunisia</li>
                  <li>17:00 : Mexico - Polen*</li>
                  <li>20:00 : Frankrike - Australia</li>
                </ul>
                <p>* Tellende kamper i konkurransen</p>
              </div>
            </div>
          </div> */}
          <div className="flex h-14 w-full items-center justify-between self-end text-wcbeige-default">
            <Oklogo />
            <span className="text-center">Sist oppdatert: 21.11.22</span>
            <Wclogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

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

import fart from "././assets/sounds/fart.mp3";
import perfectfart from "././assets/sounds/perfect-fart.mp3";
import su from "././assets/sounds/cr_suuu.mp3";
import SisteResultater from "./siste-resultater/SisteResultater";
import NesteKamper from "./neste-kamper/NesteKamper";

const playRandomSound = () => {
  const sounds = [fart, perfectfart, su];
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);
  audio.play();
};

function App() {
  return (
    <div className="App">
      <div className="flex h-screen flex-col p-2">
        <div className="border-red-600 flex h-full  w-full max-w-full flex-col rounded border-4 border-wcbeige-default p-2 ">
          <div className="flex w-full justify-between justify-items-end">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          <div className="grid h-full grid-cols-3 justify-between text-2xl">
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
            <div className="flex flex-col p-4 ">
              <div className="flex h-96 w-full flex-row justify-center">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 1)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <img
                        key={item.name}
                        onClick={playRandomSound}
                        className="h-full"
                        src={`/profiles/card/${item.name
                          .toLowerCase()
                          .replace(/\s/g, "")}.png`}
                        alt=""
                      />
                    )
                  )}
              </div>
              <div className="flex h-80 w-full flex-row justify-center">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 3)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <img
                        key={item.name}
                        onClick={playRandomSound}
                        className="h-full"
                        src={`/profiles/card/${item.name
                          .toLowerCase()
                          .replace(/\s/g, "")}.png`}
                        alt=""
                      />
                    )
                  )}
              </div>
              <div className="flex h-72 w-full flex-row items-center">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 4)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <div key={item.name} className="h-full">
                        <img
                          onClick={playRandomSound}
                          className=""
                          src={`/profiles/card/${item.name
                            .toLowerCase()
                            .replace(/\s/g, "")}.png`}
                          alt=""
                        />
                      </div>
                    )
                  )}
              </div>
            </div>

            <div className="mt-12 ml-12 flex flex-col">
              <div className="m-4 ">
                <SisteResultater />
              </div>
              <div className="m-4">
                <NesteKamper />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-between self-end text-wcbeige-default">
            <Oklogo />
            <span className="text-center">Sist oppdatert: 23.11.22</span>
            <Wclogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

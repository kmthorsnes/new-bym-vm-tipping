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
import Resultatliste from "./resultatliste/Resultatliste";

const playRandomSound = () => {
  const sounds = [fart, perfectfart, su];
  const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
  const audio = new Audio(randomSound);
  audio.play();
};

function App() {
  return (
    <div className="App">
      <div className="flex min-h-screen flex-col p-2">
        <div className="border-red-600 flex h-full min-h-screen w-full max-w-full flex-col items-start rounded border-4 border-wcbeige-default p-2 ">
          <div className="flex w-full justify-between justify-items-end">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          <div className="flex h-full w-full grow flex-row justify-between text-2xl mobile-only:flex-col">
            <div className="m-4 w-1/3 mobile-only:w-full phablet:mt-12 phablet:ml-12">
              <Resultatliste />
            </div>
            <div className="flex h-full w-1/3 flex-col items-center p-4  mobile-only:w-full ">
              <div className="flex w-full flex-shrink flex-row items-center justify-center">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 1)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <div
                        key={item.name}
                        className="object-fit flex w-full transform justify-center transition duration-500 hover:scale-110"
                      >
                        <img
                          title="IKKE KLIKK 😏"
                          onClick={playRandomSound}
                          className="h-60 w-auto"
                          src={`/profiles/card/${item.name
                            .toLowerCase()
                            .replace(/\s/g, "")}.png`}
                          alt=""
                        />
                      </div>
                    )
                  )}
              </div>
              <div className="flex w-full flex-shrink flex-row ">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 2)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <div
                        key={item.name}
                        className="object-fit flex w-full transform justify-center transition duration-500 hover:scale-110"
                      >
                        <img
                          title="IKKE KLIKK 😏"
                          onClick={playRandomSound}
                          className="h-52 w-auto"
                          src={`/profiles/card/${item.name
                            .toLowerCase()
                            .replace(/\s/g, "")}.png`}
                          alt=""
                        />
                      </div>
                    )
                  )}
              </div>
              <div className="flex w-full flex-shrink flex-row ">
                {data.scores
                  .sort(function (a, b) {
                    return a.ranking - b.ranking;
                  })
                  .filter((score) => score.ranking === 3)
                  .map(
                    (item: { name: string; ranking: number; imgUrl: any }) => (
                      <div
                        title="IKKE KLIKK 😏"
                        key={item.name}
                        className="object-fit flex w-full transform cursor-pointer justify-center transition duration-500 hover:scale-110"
                      >
                        <img
                          onClick={playRandomSound}
                          className="h-44 w-auto"
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

            <div className="flex w-1/3 flex-col mobile-only:w-full phablet:mt-12 phablet:ml-12">
              <div className="m-4 ">
                <SisteResultater />
              </div>
              <div className="m-4">
                <NesteKamper />
              </div>
            </div>
          </div>
          <div className="flex w-full items-stretch justify-between self-end text-wcbeige-default">
            <Oklogo />
            <span className="text-center">Sist oppdatert: 29.11.22</span>
            <Wclogo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

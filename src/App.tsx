import {
  useState,
  useEffect,
  JSXElementConstructor,
  ReactElement,
  ReactFragment,
  ReactPortal,
} from "react";

import Nintendowcspiller from "./nintendowcspiller/nintendowcspiller";

import TakeMyMoney from "./takemymoney/Takemymoney";

function App() {
  const data: any = {
    scores: [
      {
        "name": "Blend",
        "score": 0,
        "lastScore": 0,
        "groupStage": 0,
        "gsStandings": 0,
        "quarter": 0,
        "semi": 0,
        "final": 0,
        "champion": 0,
        "topScorers": 0,
        "ranking": 1,
        "imgUrl": {
          "original": "/src/assets/images/profiles/background/kalle.png",
          "badge": "/src/assets/images/profiles/background/kalle.png",
          "withoutBackground": "/src/assets/images/profiles/background/kalle.png"
        }
      },{
        "name": "Caroline",
        "score": 0,
        "lastScore": 0,
        "groupStage": 0,
        "gsStandings": 0,
        "quarter": 0,
        "semi": 0,
        "final": 0,
        "champion": 0,
        "topScorers": 0,
        "ranking": 1,
        "imgUrl": {
          "original": "/src/assets/images/profiles/background/kalle.png",
          "badge": "/src/assets/images/profiles/background/kalle.png",
          "withoutBackground": "/src/assets/images/profiles/background/kalle.png"
        }
      },
    ],
    nextMatchStats: {
      nextMatch: { hWin: 0, bWin: 0 },
      lastMatch: { h: "Italia", b: "England" },
      lastMatchWinner: "Italia",
    },
    topScorerStats: [
      ["Kylian Mbappé", 7],
      ["Cristiano Ronaldo", 6],
      ["Harry Kane", 5],
      ["Romelu Lukaku", 5],
      ["Robert Lewandowski", 3],
      ["Giorgio Chiellini", 1],
      ["Marco Verratti", 1],
      ["David Villa", 1],
      ["Raúl González", 1],
    ],
    lastUpdate: "2021-07-12T07:17:48.753Z",
  };

  return (
    <div className="App">
      <div className=" h-screen w-screen p-2">
        <div className="border-red-600 flexlex-col h-full w-full rounded border-4 border-wcbeige-default p-2">
          <div className="flex w-full justify-between">
            <TakeMyMoney />
            <div className="flex text-center text-5xl text-wcbeige-default">
              Byms VM-tipping
            </div>
            <Nintendowcspiller />
          </div>

          <div className="flex">
            <ul>{data.scores.map((item: { name: string; }) => <li>{item.name}</li>)}</ul>
          </div>
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

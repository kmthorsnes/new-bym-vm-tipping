import { useEffect, useState } from "react";
import { getData } from "../utils/helperFunctions";
import data from "../data/data.json";
import Resultatliste from "./Resultatliste";

let liveData: any[] = [];

const livedata = () => {
  const [apidata, setApiData] = useState<any[]>([]);

  useEffect(() => {
    getData(
      "https://kmthorsnes.github.io/bym-vm-tipping-dummy-data/livedata.json"
    ).then((data) => setApiData(data));
    console.log("Getting match data");
  }, []);
  liveData = apidata;
};

livedata();

const playerScores: { name: string; points: number }[] = [];

for (const person of data.scores) {
  let totalPoints = 0;
  for (const prediction of person.predictions) {
    for (const match of liveData) {
      if (
        prediction.match_id === match.match_id &&
        match.status === "complete"
      ) {
        // gi 1 poeng for riktig tipping av vinner
        if (
          (prediction.home_team_score > prediction.away_team_score &&
            match.home_team_result > match.away_team_result) ||
          (prediction.home_team_score < prediction.away_team_score &&
            match.home_team_result < match.away_team_result) ||
          (prediction.home_team_score === prediction.away_team_score &&
            match.home_team_result === match.away_team_result)
        ) {
          totalPoints += 1;
        }
        // gi 3 poeng for riktig tipping av antall mål hvis både hjemmelagsmål og bortelagsmål er riktig tippet
        if (
          prediction.home_team_score === match.home_team_result &&
          prediction.away_team_score === match.away_team_result
        ) {
          totalPoints += 3;
        }
      }
    }
  }

  playerScores.push({ name: person.name, points: totalPoints });
}

// vise spillere og poeng i en liste
for (const player of playerScores) {
  console.log(`${player.name}: ${player.points} poeng`);
}

export default Resultatliste3;

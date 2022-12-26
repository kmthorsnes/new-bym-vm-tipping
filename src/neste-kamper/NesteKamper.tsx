import { useState } from "react";
import { useEffect } from "react";
import SisteResultatKort from "../siste-resultater/SisteResultatKort";
import { translate } from "../utils/translate";

const SisteResultater = () => {
  // Fetch the latest completed matches from the API
  const [matches, setMatches] = useState<any[]>([]);
  useEffect(() => {
    async function fetchMatches() {
      const response = await fetch("https://worldcupjson.net/matches");
      const matches = await response.json();
      // Filter out only the latest completed matches
      const latestCompletedMatches = matches.filter(
        (match: {
          status: string;
          datetime: string | number | Date | any;
          home_team: any;
          away_team: any;
          stage_name: string;
        }) => {
          // Check that the match is completed and is from the last 5 days
          return (
            match.status !== "completed"
          );

        }
      );
      setMatches(latestCompletedMatches);
    }
    fetchMatches();
  }, []);

  // Render the matches in the table
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2} className="text-left text-2xl">
            Neste kamper: Finale og BronseFinale
          </th>
        </tr>
      </thead>
      <tbody>
        {matches.map(
          (
            match // set any type for home_team and away_team
          ) => (
            <SisteResultatKort
              hjemmelag={match.home_team.name}
              hjemmelagScore={match.home_team.goals}
              bortelag={match.away_team.name}
              bortelagScore={match.away_team.goals}
            />
          )
        )}
      </tbody>
    </table>
  );
};

export default SisteResultater;


// import { useState, useEffect } from "react";
// import NestekampKort from "./NestekampKort";

// const NesteKamper = () => {
//   const getData = async (url: string) => {
//     const response = await fetch(url);
//     return response.json();
//   };

//   const [apidata, setApiData] = useState<any[]>([]);

//   useEffect(() => {
//     getData("https://worldcupjson.net/matches").then((apidata) =>
//       setApiData(apidata)
//     );
//   }, []);

//   // return a list of latest played matches
//   const latestMatches = apidata
//     .filter((match) => match.status === "completed")
//     .slice(0, 5);

//   // return a list of upcoming matches
//   return (
//     <>
//       <div className="table-auto">
//         <div className="text-left text-3xl mb-2 font-bold">Neste kamper - Semifinaler</div>
//       </div>
//       <div>
//         <div className="text-xl mt-2">Onsdag 14.12.2022</div>
//         <NestekampKort
//           tidspunkt="20:00"
//           hjemmelag="Frankrike"
//           bortelag="Marokko"
//           prediksjonH="50"
//           prediksjonU="25"
//           prediksjonB="25"
//         />
//       </div>
//     </>
//   );
// };
// export default NesteKamper;

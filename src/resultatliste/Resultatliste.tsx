import data from "../data/data.json";

const howMany: number = 4;

const sortByTotalScore = () => {
  data.scores.sort(function (a, b) {
    return (
      b.groupStageScore +
      b.groupStageXtra +
      b.eightsMatchesPt1 +
      b.eightsMatchesPt2 +
      b.quarterFinalists +
      b.qf1 +
      b.qf2 +
      b.qf3 +
      b.qf4 +
      b.semiFinalist1 +
      b.semiFinalist2 +
      b.semiFinalist3 +
      b.semiFinalist4 +
      b.sf1 +
      b.sf2 +
      b.bf1 +
      b.finalist1 +
      b.finalist2 +
      b.champion +
      b.topScorer +
      b.red40 +
      b.mostGoals41 +
      b.mostGoals1_42 +
      b.mostGoals2_43 +
      b.mostGoals3_44 +
      b.mostGoals4_45 +
      b.mostGoals5_46 +
      b.goalsTotalPlayers_47 +
      b.goalsTotalCountries_48 +
      b.longestCountry1_49 +
      b.longestCountry2_50 -
      (a.groupStageScore +
        a.groupStageXtra +
        a.eightsMatchesPt1 +
        a.eightsMatchesPt2 +
        a.quarterFinalists +
        a.qf1 +
        a.qf2 +
        a.qf3 +
        a.qf4 +
        a.semiFinalist1 +
        a.semiFinalist2 +
        a.semiFinalist3 +
        a.semiFinalist4 +
        a.sf1 +
        a.sf2 +
        a.bf1 +
        a.finalist1 +
        a.finalist2 +
        a.champion +
        a.topScorer +
        a.red40 +
        a.mostGoals41 +
        a.mostGoals1_42 +
        a.mostGoals2_43 +
        a.mostGoals3_44 +
        a.mostGoals4_45 +
        a.mostGoals5_46 +
        a.goalsTotalPlayers_47 +
        a.goalsTotalCountries_48 +
        a.longestCountry1_49 +
        a.longestCountry2_50)
    );
  });
};

// a function that ranks players after totalt socre. If two players or more have the same score, they get the same ranking and the next players gets a rank which is the previous score + the number of players with the previous score.

const addRanking = () => {
  data.scores.sort((a, b) => {
    const scoreA =
      a.groupStageScore +
      a.groupStageXtra +
      a.eightsMatchesPt1 +
      a.eightsMatchesPt2 +
      a.quarterFinalists +
      a.qf1 +
      a.qf2 +
      a.qf3 +
      a.qf4 +
      a.semiFinalist1 +
      a.semiFinalist2 +
      a.semiFinalist3 +
      a.semiFinalist4 +
      a.sf1 +
      a.sf2 +
      a.bf1 +
      a.finalist1 +
      a.finalist2 +
      a.champion +
      a.topScorer +
      a.red40 +
      a.mostGoals41 +
      a.mostGoals1_42 +
      a.mostGoals2_43 +
      a.mostGoals3_44 +
      a.mostGoals4_45 +
      a.mostGoals5_46 +
      a.goalsTotalPlayers_47 +
      a.goalsTotalCountries_48 +
      a.longestCountry1_49 +
      a.longestCountry2_50;
    const scoreB =
      b.groupStageScore +
      b.groupStageXtra +
      b.eightsMatchesPt1 +
      b.eightsMatchesPt2 +
      b.quarterFinalists +
      b.qf1 +
      b.qf2 +
      b.qf3 +
      b.qf4 +
      b.semiFinalist1 +
      b.semiFinalist2 +
      b.semiFinalist3 +
      b.semiFinalist4 +
      b.sf1 +
      b.sf2 +
      b.bf1 +
      b.finalist1 +
      b.finalist2 +
      b.champion +
      b.topScorer +
      b.red40 +
      b.mostGoals41 +
      b.mostGoals1_42 +
      b.mostGoals2_43 +
      b.mostGoals3_44 +
      b.mostGoals4_45 +
      b.mostGoals5_46 +
      b.goalsTotalPlayers_47 +
      b.goalsTotalCountries_48 +
      b.longestCountry1_49 +
      b.longestCountry2_50;
    if (scoreA < scoreB) {
      return 1;
    } else if (scoreA > scoreB) {
      return -1;
    } else {
      return 0;
    }
  });

  let previousScore = -1;
  let ranking = 1;
  data.scores.forEach((item, index) => {
    const score =
      item.groupStageScore +
      item.groupStageXtra +
      item.eightsMatchesPt1 +
      item.eightsMatchesPt2 +
      item.quarterFinalists +
      item.qf1 +
      item.qf2 +
      item.qf3 +
      item.qf4 +
      item.semiFinalist1 +
      item.semiFinalist2 +
      item.semiFinalist3 +
      item.semiFinalist4 +
      item.sf1 +
      item.sf2 +
      item.bf1 +
      item.finalist1 +
      item.finalist2 +
      item.champion +
      item.topScorer +
      item.red40 +
      item.mostGoals41;
    item.mostGoals1_42 +
      item.mostGoals2_43 +
      item.mostGoals3_44 +
      item.mostGoals4_45 +
      item.mostGoals5_46 +
      item.goalsTotalPlayers_47 +
      item.goalsTotalCountries_48 +
      item.longestCountry1_49 +
      item.longestCountry2_50;
    if (score !== previousScore) {
      ranking = index + 1;
      previousScore = score;
    }
    item.ranking = ranking;
  });
};

sortByTotalScore();
addRanking();

const Resultatliste = () => {
  return (
    <>
      <table className="">
        <tbody>
          <tr>
            <th colSpan={2}>Rangering:</th>
          </tr>
          <th>
            <div className="text-left text-xs">Poeng</div>
          </th>
          <th>
            <div className="text-left text-xs ">Detaljer</div>
          </th>
          {data.scores.map(
            (
              item: {
                name: string;
                ranking: number;
                groupStageScore: number;
                groupStageXtra: number;
                eightsMatchesPt1: number;
                eightsMatchesPt2: number;
                quarterFinalists: number;
                qf1: number;
                qf2: number;
                qf3: number;
                qf4: number;
                semiFinalist1: number;
                semiFinalist2: number;
                semiFinalist3: number;
                semiFinalist4: number;
                sf1: number;
                sf2: number;
                bf1: number;
                f: number;
                champion: number;
                topScorer: number;
                red40: number;
                mostGoals41: number;
                mostGoals1_42: number;
                mostGoals2_43: number;
                mostGoals3_44: number;
                mostGoals4_45: number;
                mostGoals5_46: number;
                goalsTotalPlayers_47: number;
                goalsTotalCountries_48: number;
                longestCountry1_49: number;
                longestCountry2_50: number;
                finalist1: number;
                finalist2: number;
              },
              index
            ) => (
              <tr key={item.name}>
                <td className="text-sm">{item.ranking}</td>
                <td className="text-sm">{item.name}</td>
                <td className="text-sm">
                  {item.groupStageXtra +
                    item.groupStageScore +
                    item.eightsMatchesPt1 +
                    item.eightsMatchesPt2 +
                    item.quarterFinalists +
                    item.qf1 +
                    item.qf2 +
                    item.qf3 +
                    item.qf4 +
                    item.semiFinalist1 +
                    item.semiFinalist2 +
                    item.semiFinalist3 +
                    item.semiFinalist4 +
                    item.sf1 +
                    item.sf2 +
                    item.bf1 +
                    item.finalist1 +
                    item.finalist2 +
                    item.f +
                    item.champion +
                    item.topScorer +
                    item.red40 +
                    item.mostGoals41 +
                    item.mostGoals1_42 +
                    item.mostGoals2_43 +
                    item.mostGoals3_44 +
                    item.mostGoals4_45 +
                    item.mostGoals5_46 +
                    item.goalsTotalPlayers_47 +
                    item.goalsTotalCountries_48 +
                    item.longestCountry1_49 +
                    item.longestCountry2_50}{" "}
                  ({item.f})
                </td>
                <div className="flex w-full flex-wrap items-center text-sm">
                  [
                  <span className="text-bumanguéSBlue-200">
                    {item.groupStageScore}
                  </span>{" "}
                  +{" "}
                  <span className="text-bumanguéSBlue-400">
                    {item.groupStageXtra}
                  </span>{" "}
                  +{" "}
                  <span className="text-wcyellow-600">
                    {item.eightsMatchesPt1 + item.eightsMatchesPt2}
                  </span>{" "}
                  +{" "}
                  <span className="text-green-default">
                    {item.quarterFinalists}
                  </span>{" "}
                  +{" "}
                  <span className="text-black-default">
                    {item.qf1 + item.qf2 + item.qf3 + item.qf4}
                  </span>{" "}
                  +{" "}
                  <span className="text-red-500">
                    {item.semiFinalist1 +
                      item.semiFinalist2 +
                      item.semiFinalist3 +
                      item.semiFinalist4}
                  </span>{" "}
                  +{" "}
                  <span className="text-purple-700">{item.sf1 + item.sf2}</span>{" "}
                  +{" "}
                  <span className="text-teal-500">
                    {item.finalist1 + item.finalist2}
                  </span>{" "}
                  + <span className="text-amber-700">{item.bf1}</span>+{" "}
                  <span className="text-red-500">{item.f}</span> +{" "}
                  <span className="italic text-blue-500">{item.champion}</span>+{" "}
                  <span className="italic text-green-500">
                    {item.topScorer}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-black-default">
                    {item.red40}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-purple-500">
                    {item.mostGoals41}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-goldenrod-default">
                    {item.mostGoals1_42}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-wcbeige-600">
                    {item.mostGoals2_43}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-teal-500">
                    {item.mostGoals3_44}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-amber-500">
                    {item.mostGoals4_45}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-red-500">
                    {item.mostGoals5_46}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-blue-500">
                    {item.goalsTotalPlayers_47}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-green-500">
                    {item.goalsTotalCountries_48}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-black-default">
                    {item.longestCountry1_49}
                  </span>{" "}
                  +{" "}
                  <span className="italic text-pink-500">
                    {item.longestCountry2_50}
                  </span>
                  ]
                </div>
              </tr>
            )
          )}
        </tbody>
      </table>

      <div className="leading-4">
        <span className="text-xs">
          *
          <span className="text-bumanguéSBlue-200">
            Gruppespillresultattipping
          </span>{" "}
          +{" "}
          <span className="text-bumanguéSBlue-400">
            Gruppespillspesialspill
          </span>{" "}
          +{" "}
          <span className="text-wcyellow-600">1/8-finalerresultattipping</span>{" "}
          + <span className="text-green-default">Kvartfinalister</span> +{" "}
          <span className="text-black-default">Kvartfinaleresultattipping</span>{" "}
          +<span className="text-red-500">Semifinalister</span> +{" "}
          <span className="text-purple-700">Semifinaleresultatspill</span> +{" "}
          <span className="text-teal-500">Finalister</span> +{" "}
          <span className="text-amber-500">Bronsjefinaleresultatspill</span> +{" "}
          <span className=" text-red-500">Finaleresultatspill</span> +{" "}
          <span className="italic text-blue-500">Verdensmester</span>+{" "}
          <span className="italic text-green-500">39.Toppscorer</span> +{" "}
          <span className="italic text-black-default">40. Flest røde kort</span>{" "}
          +{" "}
          <span className="italic text-purple-500">
            41. Flest mål i enkeltkamp
          </span>{" "}
          +{" "}
          <span className="italic text-goldenrod-default">
            42. Flest mål gr 1
          </span>{" "}
          + <span className="italic text-wcbeige-600">43. Flest mål gr 2</span>{" "}
          + <span className="italic text-teal-500">44. Flest mål gr 3</span> +{" "}
          <span className="italic text-amber-500">45. Flest mål gr 4</span> +{" "}
          <span className="italic text-red-500">46. Flest mål gr 5</span> +{" "}
          <span className="italic text-blue-500">
            47. Mål totalt av spillere
          </span>{" "}
          +{" "}
          <span className="italic text-green-500">48. Mål totalt av land</span>{" "}
          +{" "}
          <span className="italic text-black-default">
            49. Kommer lengst av land 1
          </span>{" "}
          +{" "}
          <span className="italic text-pink-500">
            50. Kommer lengst av land 2
          </span>
        </span>
      </div>
    </>
  );
};
export default Resultatliste;

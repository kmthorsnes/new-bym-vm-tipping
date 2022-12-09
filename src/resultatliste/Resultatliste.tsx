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
      b.finalist1 +
      b.finalist2 +
      b.champion -
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
        a.finalist1 +
        a.finalist2 +
        a.champion)
    );
  });
};

// a function that ranks players after totalt socre. If two players or more have the same score, they get the same ranking and the next players gets a rank which is the previous score + the number of players with the previous score.

const addRanking = () => {
  let ranking = 1;
  let previousScore = 0;
  let numberOfPlayersWithPreviousScore = 0;
  data.scores.forEach((item, index) => {
    if (
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
        item.finalist1 +
        item.finalist2 +
        item.champion ===
      previousScore
    ) {
      item.ranking = ranking;
      numberOfPlayersWithPreviousScore++;
    }
    if (
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
        item.finalist1 +
        item.finalist2 +
        item.champion !==
      previousScore
    ) {
      ranking = ranking + numberOfPlayersWithPreviousScore;
      item.ranking = ranking;
      numberOfPlayersWithPreviousScore = 1;
      previousScore =
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
        item.finalist1 +
        item.finalist2 +
        item.champion
    }
  });
};
sortByTotalScore();
addRanking();

const Resultatliste = () => {
  return (
    <div className="table-auto">
      <div>
        <div>
          <div className="text-left text-3xl font-bold">Siste poeng:</div>
        </div>
        <div>
          <div className="text-left text-xs ">
            #. Navn: Poeng (Siste poeng) [Detaljer*]
          </div>
        </div>
      </div>
      <div>
        {data.scores.

        map(
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
              finalist1: number;
              finalist2: number;
              champion: number;
            },
            index
          ) => (
            <div key={item.name}>
              <div className="flex items-center">
                {item.ranking}. {item.name}:{" "}
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
                  item.finalist1 +
                  item.finalist2 + item.champion
                   }
                {"  "}
                <span className="text-xs">({item.qf2})</span>
                <span className="text-sm">
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
                  <span className="text-green-dark">{item.semiFinalist1 + item.semiFinalist2 + item.semiFinalist3 + item.semiFinalist4}</span>]
                </span>
              </div>
            </div>
          )
        )}

        <div>
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
            <span className="text-wcyellow-600">
              1/8-finalerresultattipping
            </span>{" "}
            + {" "}<span className="text-green-default">Kvartfinalister</span>{" "}+{" "}
            <span className="text-black-default">
              Kvartfinaleresultattipping
            </span>{" "}
            + <span className="text-green-dark">Semifinalister</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Resultatliste;

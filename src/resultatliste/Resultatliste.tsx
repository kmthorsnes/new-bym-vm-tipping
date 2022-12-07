import data from "../data/data.json";

const howMany: number = 4;

const sortByTotalScore = () => {
  data.scores.sort(function (a, b) {
    return (
      b.groupStageScore +
      b.groupStageXtra +
      b.eights -
      (a.groupStageScore + a.groupStageXtra + a.eights)
    );
  });
};


// create function that adds a ranking to each player based on the total score
const addRanking = () => {
  let ranking = 1;
  let previousScore = 0;
  data.scores.forEach((item) => {
    if (
      item.groupStageScore + item.groupStageXtra + item.eights !==
      previousScore
    ) {
      item.ranking = ranking;
      ranking++;
    } else {
      item.ranking = ranking - 1;
    }
    previousScore = item.groupStageScore + item.groupStageXtra + item.eights;
  });
};

sortByTotalScore();
addRanking();

const Resultatliste = () => {
  return (
    <div className="table-auto">
      <div>
        <div>
          <div className="text-left text-3xl">Siste poeng:</div>
        </div>
        <div>
          <div className="text-left text-xs ">
            #. Navn: Poeng (Siste poeng) [Detaljer*]
          </div>
        </div>
      </div>
      <div>
        {data.scores.map(
          (
            item: {
              name: string;
              ranking: number;
              groupStageScore: number;
              groupStageXtra: number;
              eights: number;
            },
            index
          ) => (
            <div key={item.name}>
              <div className="flex items-center">
                {item.ranking}. {item.name}:{" "}
                {item.groupStageXtra + item.groupStageScore + item.eights}
                {"  "}
                <span className="text-xs">({item.eights})</span>
                <span className="text-sm">
                  [
                  <span className="text-bumanguéSBlue-200">
                    {item.groupStageScore}
                  </span>{" "}
                  +{" "}
                  <span className="text-bumanguéSBlue-400">
                    {item.groupStageXtra}
                  </span>{" "}
                  + <span className="text-wcyellow-600">{item.eights}</span>]
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
            + <span className="text-wcyellow-600">Åttendedelsfinale</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Resultatliste;

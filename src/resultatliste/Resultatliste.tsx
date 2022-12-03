import data from "../data/data.json";

const howMany: number = 4;

const Resultatliste = () => {
  return (
    <div className="table-auto">
      <div>
        <div>
          <div className="text-left text-3xl">Siste poeng:</div>
        </div>
        <div>
          <div className="text-left text-xs ">
            #. Navn: Poeng (Siste poeng) [Detaljer*] test
          </div>
        </div>
      </div>
      <div>
        {data.scores
          .sort(function (a, b) {
            return (
              (a.groupStageScore + a.groupStageXtra) +
              (b.groupStageScore + b.groupStageXtra)
            );
          })
          .map(
            (
              item: {
                name: string;
                ranking: number;
                groupStageScore: number
                groupStageXtra: number;
              },
              index
            ) => (
              <div key={item.name}>
                <div className="flex items-center">
                  {item.ranking}. {item.name}:{" "}
                  {item.groupStageXtra +
                    item.groupStageScore}
                  {"  "}
                  <span className="text-xs">
                    (
                    {item.groupStageScore}
                    )
                  </span>
                  <span className="text-sm">
                    [
                    <span className="text-bumanguéSBlue-200">
                    {item.groupStageScore}
                    </span>{" "}
                    +{" "}
                    <span className="text-bumanguéSBlue-400">
                      {item.groupStageXtra}
                    </span>
                    ]
                  </span>
                </div>
              </div>
            )
          )}
        <span className="text-xs">
          *
          <span className="text-bumanguéSBlue-200">
            Gruppespillresultattipping
          </span>
          +{" "}
          <span className="text-bumanguéSBlue-400">
            Gruppespillspesialspill
          </span>
        </span>
      </div>
    </div>
  );
};
export default Resultatliste;

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
          <div className="text-left text-xs ">#. Navn: Poeng (Siste poeng) [Detaljer*]</div>
        </div>
      </div>
      <div>
        {data.scores
          .sort(function (a, b) {
            return (
              b.groupStageXtra +
              b.gsScore.reduce((a: number, b: number) => a + b, 0) -
              a.groupStageXtra +
              a.gsScore.reduce((a: number, b: number) => a + b, 0)
            );
          })
          .map(
            (
              item: {
                name: string;
                ranking: number;
                gsScore: Array<Number> | any;
                groupStageXtra: Number;
              },
              index
            ) => (
              <div key={item.name}>
                <div className="flex items-center">
                  {item.ranking}. {item.name}:{" "}
                  {item.groupStageXtra +
                    item.gsScore.reduce(
                      (a: number, b: number) => a + b,
                      0
                    )}{"  "}

                  <span className="text-xs">(
                    {item.gsScore
                      .slice(-howMany)
                      .reduce((acc: number, val: number) => acc + val)}
                    )
                  </span>
                  <span className="text-sm">
                    [
                    <span className="text-bumanguéSBlue-200">
                      {item.gsScore.reduce((a: number, b: number) => a + b, 0)}
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

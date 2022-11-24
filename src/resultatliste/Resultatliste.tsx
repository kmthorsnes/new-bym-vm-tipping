import data from "../data/data.json";

const howMany:number = 4;

const Resultatliste = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th className="">Siste resultater:</th>
        </tr>
        <tr>
          <th className="text-sm">
            # Navn - Poeng - (Poeng samlet forrige spilldag)
          </th>
        </tr>
      </thead>
      <tbody>
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
              <tr>
                <td key={item.name}>
                  {item.ranking}. {item.name}:{" "}
                  {item.score.reduce((a: number, b: number) => a + b, 0)} (
                  {item.score.slice(-howMany).reduce((acc:number, val:number) => acc + val)})
                </td>
              </tr>
            )
          )}
      </tbody>
    </table>
  );
};
export default Resultatliste;

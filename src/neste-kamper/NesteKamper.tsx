import { useState, useEffect } from "react";
import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  const getData = async (url: string) => {
    const response = await fetch(url);

    return response.json();
  };

  const [apidata, setApiData] = useState<string[]>([]);

  useEffect(() => {
    getData("https://worldcupjson.net/matches").then((apidata) =>
      setApiData(apidata)
    );
    console.log(apidata);
  }, []);

  return (
    <>
          {/* {apidata.map(
            (
              kamp: {
                key: string;
                hometeam.name: number;
              },
              index
            ) => (
                      <div
                        key={kamp.id}
                        id={kamp.id}>
                        {kamp.hometeam.name} - {kamp.awayteam.name}
                      </div>
                    ))} */}

    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 6.12 - Åttendedelsfinale
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Marokko" bortelag="Spania"  prediksjonH="42" prediksjonU="8" prediksjonB="50" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Portugal"
          bortelag="Sveits"
          prediksjonH="58" prediksjonU="25" prediksjonB="17"
        />
      </tbody>
    </table>
    </>
  );
};
export default NesteKamper;

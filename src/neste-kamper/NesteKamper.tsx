import { useState, useEffect } from "react";
import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  const getData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const [apidata, setApiData] = useState<any[]>([]);

  useEffect(() => {
    getData("https://worldcupjson.net/matches").then((apidata) =>
      setApiData(apidata)
    );
  }, []);

  // return a list of latest played matches
  const latestMatches = apidata
    .filter((match) => match.status === "completed")
    .slice(0, 5);

  // return a list of upcoming matches
  return (
    <>
      <div className="table-auto">
        <div className="text-left text-3xl mb-2 font-bold">Neste kamper - Semifinaler</div>
      </div>
      <div>

        <div className="text-xl mt-2">Tirsdag 13.12.2022</div>
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Argentina"
          bortelag="Kroatia"
          prediksjonH="42"
          prediksjonU="42"
          prediksjonB="17"

        />
        <div className="text-xl mt-2">Onsdag 14.12.2022</div>
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Frankrike"
          bortelag="Marokko"
          prediksjonH="50"
          prediksjonU="25"
          prediksjonB="25"
        />
      </div>
    </>
  );
};
export default NesteKamper;

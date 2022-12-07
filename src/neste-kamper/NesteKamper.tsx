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
  const latestMatches =
  apidata
    .filter((match) => match.status === "completed")
    .slice(0, 5);

  // return a list of upcoming matches
  return (


    <>
      <div className="table-auto">
        <div className="text-left text-3xl">
          {/* Neste kamper 6.12 - Åttendedelsfinale */}
        </div>
        {latestMatches.map((match) => (<p key={match.id}>{match.hometeam}</p>))}
      </div>
      <div>
        {/* <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Marokko"
          bortelag="Spania"
          prediksjonH="42"
          prediksjonU="8"
          prediksjonB="50"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Portugal"
          bortelag="Sveits"
          prediksjonH="58"
          prediksjonU="25"
          prediksjonB="17"
        /> */}
      </div>
    </>
  );
};
export default NesteKamper;

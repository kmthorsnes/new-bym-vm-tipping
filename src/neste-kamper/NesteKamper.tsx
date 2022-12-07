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
        <div className="text-left text-3xl mb-2 font-bold">Neste kamper - Kvartfinaler</div>
        <div className="text-xl mb-2">Fredag 9.12.2022</div>
      </div>
      <div>
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Kroatia"
          bortelag="Brasil"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Nederland"
          bortelag="Argentina"
        />
        <div className="text-xl mt-2">Lørdag 10.12.2022</div>
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Marokko"
          bortelag="Portugal"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="England"
          bortelag="Frankrike"
        />
      </div>
    </>
  );
};
export default NesteKamper;

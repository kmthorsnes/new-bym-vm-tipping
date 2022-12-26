import React, { useState, useEffect } from "react";
import { translate } from "../utils/translate";
import { capitalize } from "../utils/capitalize";

const Livedata = () => {
  const getData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const [apidata, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData(
        "https://kmthorsnes.github.io/bym-vm-tipping-dummy-data/livedata.json"
      )
        .then((data) =>
          data.filter(
            (match: { status: string }) => match.status === "in_progress"
          )
        )
        .then((data) => setApiData(data));
      console.log("Live match data");
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {apidata.length !== 0 && (
        <div>
          <div className="font-2xl font-bold">Live score</div>
          {apidata.map(
            (item: {
              away_team: any;
              home_team: any;
              id: number;
              location: string;
              name: string;
            }) => (
              <div key={item.id}>
                {capitalize(translate(item.home_team.name))}{" "}
                {item.home_team.goals} - {item.away_team.goals}{" "}
                {capitalize(translate(item.away_team.name))}{" "}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Livedata;

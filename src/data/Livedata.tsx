import React, { useState, useEffect } from "react";
import { translateCountry, capitalize } from "../utils/helperFunctions";

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
        <div className=" bg-gradient-to-r from-black-default to-gray-800 rounded-lg p-4">
          <div className="font-2xl text-white-default text-center font-bold">Live score</div>
          {apidata.map(
            (item: {
              away_team: any;
              home_team: any;
              id: number;
              location: string;
              name: string;
            }) => (
              <div className="text-white-default text-center flex justify-center" key={item.id}>
                <div>
                {capitalize(translateCountry(item.home_team.name))}{" "}
                <img
            className="h-3 w-auto rounded-full"
            src={`https://countryflagsapi.com/svg/argentina`}
            alt={`${item.home_team.name} flag`}
          />{" "}
                </div>

                <div>{item.home_team.goals} - {item.away_team.goals}{" "}</div>
                <div>{capitalize(translateCountry(item.away_team.name))}{" "}</div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Livedata;

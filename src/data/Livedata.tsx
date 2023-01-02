import React, { useState, useEffect } from "react";
import {
  translateCountry,
  capitalize,
  translateCountryCode,
} from "../utils/helperFunctions";
import Flag from "react-world-flags";

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
        <div className="rounded-lg bg-gradient-to-r from-black-default to-gray-800 p-4">
          <div className="font-2xl text-center font-bold text-white-default">
            Live score
          </div>
          {apidata.map(
            (item: {
              away_team: any;
              home_team: any;
              home_team_country: string;
              away_team_country: string;
              id: number;
              location: string;
              name: string;
              country: string;
            }) => (
              <div
                className="flex justify-center text-center text-white-default gap-2"
                key={item.id}
              >
                <div className="flex flex-col gap-2 items-center justify-center">
                  {capitalize(translateCountry(item.home_team.name))}{" "}
                  <div className=" w-10 flex-col justify-center">
                    <Flag
                      code={translateCountryCode(item.home_team.country)}
                      className="rounded-lg"
                    />
                  </div>{" "}
                </div>

                <div>
                {" "} {item.home_team.goals} - {item.away_team.goals}{" "}
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  {capitalize(translateCountry(item.away_team.name))}{" "}
                  <div className=" w-10 flex-col justify-center">
                    <Flag
                      code={translateCountryCode(item.away_team.country)}
                      className="rounded-lg"
                    />
                  </div>{" "}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Livedata;

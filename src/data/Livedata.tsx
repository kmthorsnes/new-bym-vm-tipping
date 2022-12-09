import React, { useState, useEffect } from "react";

const Livedata = () => {
  const getData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const [apidata, setApiData] = useState<any[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      getData("https://worldcupjson.net/matches/current").then((data) =>
        setApiData(data)

      );
      console.log('data fetched')
    }, 30000);
    return () => clearInterval(interval);
  }, []);



  console.log(apidata);



  return (
    <>
      {apidata.length !== 0 && (
        <div>
          <div className="font-2xl">Live score</div>
          {apidata.map(
            (item: {
              away_team: any;
              home_team: any;
              id: number;
              location: string;
              name: string;
            }) => (
              <div key={item.id}>
                {item.home_team.name} {item.home_team.goals} -{" "}
                {item.away_team.goals} {item.away_team.name}{" "}
              </div>
            )
          )}
        </div>
      )}
    </>
  );
};
export default Livedata;

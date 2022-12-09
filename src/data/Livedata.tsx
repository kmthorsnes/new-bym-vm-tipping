import React, { useState, useEffect } from "react";

const Livedata = () => {
  const getData = async (url: string) => {
    const response = await fetch(url);
    return response.json();
  };

  const [apidata, setApiData] = useState<any[]>([]);

  useEffect(() => {
    getData("https://worldcupjson.net/matches").then((data) =>
      setApiData(data)
    );
    console.log(apidata);
  }, []);

  return (
    <>
      <div>Her er det livedata</div>
      {apidata.map((item: { id: number; location: string}) => (

        <div key={item.id}>{item.location}</div>
                ))}

    </>
  );
};
export default Livedata;

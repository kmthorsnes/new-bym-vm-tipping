import { useEffect, useState } from "react";

const SisteResultatKort = (props: {
  hjemmelag: string;
  hjemmelagScore: number;
  bortelag: string;
  bortelagScore: number;
}): JSX.Element => {
  return (
    <div className="flex w-full justify-evenly ">
      <div className="flex w-full items-center justify-end  gap-2">
        <div className="flex flex-col items-center justify-center text-lg font-bold text-red-600">
          <img
            className="h-3 w-auto rounded-full"
            src={`https://countryflagsapi.com/png/${props.hjemmelag}`}
            alt={`${props.hjemmelag} flag`}
          />{" "}
          {props.hjemmelag}
        </div>
        <div className="flex justify-end ">{props.hjemmelagScore}</div>

      </div>
      <div className="flex justify-center items-center">-</div>
      <div className="flex w-full flex-grow items-center justify-start  gap-2">
      <div className="flex justify-end  items-end">{props.bortelagScore}</div>
        <div className="flex flex-col items-center justify-center text-lg font-bold text-red-600">
          <img
            className="h-3 w-auto rounded-full"
            src={`https://countryflagsapi.com/png/${props.bortelag}`}
            alt={`${props.bortelag} flag`}
          />
          {props.bortelag}
        </div>
      </div>

    </div>
  );
};

export default SisteResultatKort;

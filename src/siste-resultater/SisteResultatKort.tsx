import { useEffect, useState } from "react";

const SisteResultatKort = (props: {
  hjemmelag: string;
  hjemmelagScore: number;
  bortelag: string;
  bortelagScore: number;
}): JSX.Element => {


  return (
    <tr>
      <td className="rounded border bg-gradient-to-r text-lg font-bold text-red-600">
        <img className="h-3" src={`https://countryflagsapi.com/png/${props.hjemmelag}`} alt={`${props.hjemmelag} flag`} />{" "}
        {props.hjemmelag} {props.hjemmelagScore} - {props.bortelagScore}{" "}
        {props.bortelag}
        <img className="h-3" src={`https://countryflagsapi.com/png/${props.bortelag}`} alt={`${props.bortelag} flag`} />
      </td>
    </tr>
  );
};

export default SisteResultatKort;

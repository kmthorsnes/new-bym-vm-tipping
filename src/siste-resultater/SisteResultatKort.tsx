const SisteResultatKort = (props: {
  hjemmelag: string;
  hjemmelagScore: number;
  bortelag: string;
  bortelagScore: number;
}): JSX.Element => {
  return (
    <tr>
      <td className="pl-2">
        {props.hjemmelag} {props.hjemmelagScore} - {props.bortelagScore} {props.bortelag}
      </td>
    </tr>
  );
};

export default SisteResultatKort;

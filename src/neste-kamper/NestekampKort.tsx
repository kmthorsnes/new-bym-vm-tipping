const NestekampKort = (props: {
  tidspunkt: string;
  hjemmelag: string;
  bortelag: string;
}): JSX.Element => {
  return (
    <tr>
      <td className="">{props.tidspunkt}</td>
      <td className="">-</td>
      <td className="pl-2">
        {props.hjemmelag} - {props.bortelag}
      </td>
    </tr>
  );
};

export default NestekampKort;

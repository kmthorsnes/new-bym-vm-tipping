const NestekampKort = (props: {
  tidspunkt: string;
  hjemmelag: string;
  bortelag: string;
  prediksjonH: string;
  prediksjonU: string;
  prediksjonB: string;
}): JSX.Element => {
  return (
    <div className="flex">
      <div className="flex w-full">{props.tidspunkt}:</div>
      <div className="flex w-full">{props.hjemmelag}</div>
      <div className="flex w-full">-</div>
      <div className="flex w-full">{props.bortelag}</div>
      <div className="flex w-1/4">🔮</div>
      <div className="flex w-1/4">{props.prediksjonH}%</div>
      <div className="flex w-1/4"> {props.prediksjonU}%</div>
      <div className="flex w-1/4">{props.prediksjonB}%</div>
    </div>
  );
};

export default NestekampKort;

const NestekampKort = (props: {
  tidspunkt: string;
  hjemmelag: string;
  bortelag: string;
  prediksjonH: string;
  prediksjonU: string;
  prediksjonB: string;
}): JSX.Element => {
  return (
    <div className="grid grid-cols-4 grid-rows-2">
      <div className="flex w-fit text-left">{props.tidspunkt}:</div>
      <div className="flex w-full  font-medium  justify-center">{props.hjemmelag}</div>
      <div className="flex w-full justify-center ">-</div>
      <div className="flex w-full justify-center  font-medium ">{props.bortelag}</div>
      <div className=" w-full text-sm ">🔮</div>
      <div className="flex w-full justify-center text-sm">{props.prediksjonH}%</div>
      <div className="flex w-full justify-center text-sm"> {props.prediksjonU}%</div>
      <div className="flex w-full justify-center text-sm">{props.prediksjonB}%</div>
    </div>
  );
};

export default NestekampKort;

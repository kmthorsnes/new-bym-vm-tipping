
const NestekampKort = (props: {
  tidspunkt: string;
  hjemmelag: string;
  bortelag: string;
  prediksjonH: string;
  prediksjonU: string;
  prediksjonB: string;
  style?: string;
}): JSX.Element => {
  return (

    <div className="grid grid-cols-4 grid-rows-2 mt-2">
      <div className="flex w-fit text-left">{props.tidspunkt}:</div>
      <div className="flex w-full justify-start underline items-center font-medium decoration-wcbeige-50">
       {props.hjemmelag}
      </div>
      <div className="flex w-full justify-center  ">-</div>
      <div className="flex w-full justify-end font-medium underline decoration-wcblue-50">
        {props.bortelag}
      </div>
      <div className="w-full mt-2 text-sm ">🔮</div>
      <div className="col-span-3 mt-2 flex h-6">
        <div
          className="text-white-default flex w-full justify-center items-center text-white rounded-l-lg bg-wcbeige-50 text-sm"
          style={{ width: `${props.prediksjonH}%` }}
        >
          {props.prediksjonH}%
        </div>
        <div
          className="text-white-default flex w-full items-center justify-center bg-wcyellow-300 text-sm "
          style={{ width: `${props.prediksjonU}%` }}
        >

          {props.prediksjonU === '0' ? '' : `${props.prediksjonU}%` }
        </div>
        <div
          className="flex w-full items-center justify-center rounded-r-lg bg-wcblue-100 text-sm text-white-default"
          style={{ width: `${props.prediksjonB}%` }}
        >
          {props.prediksjonB}%
        </div>
      </div>
    </div>
  );
};

export default NestekampKort;

const NestekampKort = (props: {
  tidspunkt: string;
  hjemmelag: string;
  bortelag: string;
  prediksjonH?: string;
  prediksjonU?: string;
  prediksjonB?: string;
  style?: string;
}): JSX.Element => {
  return (
    <div className={`mt-2 grid grid-cols-4 ${props.prediksjonH ? 'grid-cols-2' : '0'}  `}>
      <div className="flex w-fit text-left">{props.tidspunkt}:</div>
      <div className="flex w-full items-center justify-start font-medium underline decoration-wcbeige-50">
        {props.hjemmelag}
      </div>
      <div className="flex w-full justify-center">-</div>
      <div className="flex w-full justify-end font-medium underline decoration-wcblue-50">
        {props.bortelag}
      </div>
      {props.prediksjonH && (
        <>
          <div className="mt-2 h-6 w-full text-sm ">🔮</div>
          <div className="bg-white col-span-3 mt-2 flex h-6 rounded-lg">
            <div
              className="text-white flex h-full w-full items-center justify-center rounded-l-lg bg-wcbeige-50 text-sm text-white-default"
              style={{ width: `${props.prediksjonH}%` }}
            >
              {props.prediksjonH}%
            </div>
            <div
              className="flex h-full w-full items-center justify-center bg-wcyellow-300 text-sm text-white-default "
              style={{ width: `${props.prediksjonU}%` }}
            >
              {props.prediksjonU === "0" ? "" : `${props.prediksjonU}%`}
            </div>
            <div
              className="flex h-full w-full items-center justify-center rounded-r-lg bg-wcblue-50 text-sm text-white-default "
              style={{ width: `${props.prediksjonB}%` }}
            >
              {props.prediksjonB}%
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NestekampKort;

import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 29.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Nederland" bortelag="Qatar"
        prediksjonH="92"
        prediksjonU="0"
        prediksjonB="8" />
        <NestekampKort tidspunkt="16:00" hjemmelag="Ecuador" bortelag="Senegal"
        prediksjonH="17"
        prediksjonU="33"
        prediksjonB="50" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Wales"
          bortelag="England"
          prediksjonH="17"
        prediksjonU="42"
        prediksjonB="42"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Iran" bortelag="USA"
        prediksjonH="25"
        prediksjonU="33"
        prediksjonB="42" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

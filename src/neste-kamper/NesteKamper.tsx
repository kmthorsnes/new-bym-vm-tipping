import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 30.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Tunisia" bortelag="Frankrike"
        prediksjonH="8"
        prediksjonU="0"
        prediksjonB="92" />
        <NestekampKort tidspunkt="16:00" hjemmelag="Australia" bortelag="Danmark"
        prediksjonH="17"
        prediksjonU="33"
        prediksjonB="50" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Polen"
          bortelag="Argentina"
          prediksjonH="8"
        prediksjonU="8"
        prediksjonB="83"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Saudi-Arabia" bortelag="Mexico"
        prediksjonH="17"
        prediksjonU="42"
        prediksjonB="42" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

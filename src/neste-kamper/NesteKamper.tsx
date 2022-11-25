import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left">
            Neste kamper 25.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="11:00" hjemmelag="Tunisia" bortelag="Australia" />
        <NestekampKort tidspunkt="14:00" hjemmelag="Polen" bortelag="Saudi-Arabia" />
        <NestekampKort
          tidspunkt="17:00"
          hjemmelag="Frankrike"
          bortelag="Danmark"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Argentina" bortelag="Mexico" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

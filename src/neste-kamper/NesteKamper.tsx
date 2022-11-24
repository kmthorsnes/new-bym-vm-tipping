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
        <NestekampKort tidspunkt="11:00" hjemmelag="Wales" bortelag="Iran" />
        <NestekampKort tidspunkt="14:00" hjemmelag="Qatar" bortelag="Senegal" />
        <NestekampKort
          tidspunkt="17:00"
          hjemmelag="Nederland"
          bortelag="Ecuador"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="England" bortelag="Usa" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

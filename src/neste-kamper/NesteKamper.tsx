import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left">
            Neste kamper 29.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Nederland" bortelag="Qatar" />
        <NestekampKort tidspunkt="16:00" hjemmelag="Ecuador" bortelag="Senegal" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Wales"
          bortelag="England"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Iran" bortelag="USA" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

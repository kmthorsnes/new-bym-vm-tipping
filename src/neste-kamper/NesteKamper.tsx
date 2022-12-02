import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 3.12 - Kvartfinaler
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Nederland" bortelag="Usa" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Argentina"
          bortelag="Australia"
        />
      </tbody>
    </table>
  );
};
export default NesteKamper;

import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 5.12 - Kvartfinaler
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="16:00" hjemmelag="Japan" bortelag="Kroatia" />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Brasil"
          bortelag="Sør-Korea"
        />
      </tbody>
    </table>
  );
};
export default NesteKamper;

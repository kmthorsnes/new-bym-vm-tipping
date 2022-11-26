import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left">
            Neste kamper 27.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="11:00" hjemmelag="Japan" bortelag="Costa Rica" />
        <NestekampKort tidspunkt="14:00" hjemmelag="Belgia" bortelag="Marokko" />
        <NestekampKort
          tidspunkt="17:00"
          hjemmelag="Kroatia"
          bortelag="Canada"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Spania" bortelag="Tyskland" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

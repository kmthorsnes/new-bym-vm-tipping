import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left">
            Neste kamper 28.11
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort tidspunkt="11:00" hjemmelag="Kamarun" bortelag="Serbia" />
        <NestekampKort tidspunkt="14:00" hjemmelag="Sør Korea" bortelag="Ghana" />
        <NestekampKort
          tidspunkt="17:00"
          hjemmelag="Brasil"
          bortelag="Sveits"
        />
        <NestekampKort tidspunkt="20:00" hjemmelag="Portugal" bortelag="Uruguay" />
      </tbody>
    </table>
  );
};
export default NesteKamper;

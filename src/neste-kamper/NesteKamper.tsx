import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 2.12
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Sør-Korea"
          bortelag="Portugal"
          prediksjonH="8"
          prediksjonU="8"
          prediksjonB="83"
        />
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Ghana"
          bortelag="Uruguay"
          prediksjonH="0"
          prediksjonU="33"
          prediksjonB="67"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Kamerun"
          bortelag="Brasil"
          prediksjonH="8"
          prediksjonU="0"
          prediksjonB="92"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Serbia"
          bortelag="Sveits"
          prediksjonH="8"
          prediksjonU="42"
          prediksjonB="50"
        />
      </tbody>
    </table>
  );
};
export default NesteKamper;

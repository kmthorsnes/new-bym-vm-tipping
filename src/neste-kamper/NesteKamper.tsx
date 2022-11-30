import NestekampKort from "./NestekampKort";

const NesteKamper = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={3} className="text-left text-3xl">
            Neste kamper 1.12
          </th>
        </tr>
      </thead>
      <tbody>
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Kroatia"
          bortelag="Belgia"
          prediksjonH="8"
          prediksjonU="42"
          prediksjonB="50"
        />
        <NestekampKort
          tidspunkt="16:00"
          hjemmelag="Canada"
          bortelag=" Marokko"
          prediksjonH="8"
          prediksjonU="42"
          prediksjonB="50"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Japan"
          bortelag="Spania"
          prediksjonH="8"
          prediksjonU="0"
          prediksjonB="92"
        />
        <NestekampKort
          tidspunkt="20:00"
          hjemmelag="Costa Rica"
          bortelag="Tyskland"
          prediksjonH="0"
          prediksjonU="0"
          prediksjonB="100"
        />
      </tbody>
    </table>
  );
};
export default NesteKamper;

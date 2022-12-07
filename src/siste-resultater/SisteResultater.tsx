import SisteResultatKort from "./SisteResultatKort";

const SisteResultater = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2} className="text-left text-3xl">
            Siste resultater:
          </th>
        </tr>
      </thead>
      <tbody>
        <SisteResultatKort
          hjemmelag="Marokko"
          hjemmelagScore={0}
          bortelag="Spania*"
          bortelagScore={0}
        />
        <SisteResultatKort
          hjemmelag="Portugal"
          hjemmelagScore={6}
          bortelag="Sveits"
          bortelagScore={1}
        />
      </tbody>
    </table>
  );
};
export default SisteResultater;

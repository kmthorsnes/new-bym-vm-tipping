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
          hjemmelag="Japan"
          hjemmelagScore={1}
          bortelag="Kroatia*"
          bortelagScore={1}
        />
        <SisteResultatKort
          hjemmelag="Brasil"
          hjemmelagScore={4}
          bortelag="Sør-Korea"
          bortelagScore={1}
        />
      </tbody>
    </table>
  );
};
export default SisteResultater;

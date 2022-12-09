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
          hjemmelag="Kroatia*"
          hjemmelagScore={0}
          bortelag="Brasil"
          bortelagScore={0}
        />
        <SisteResultatKort
          hjemmelag="Nederland"
          hjemmelagScore={2}
          bortelag="Argentina*"
          bortelagScore={2}
        />
      </tbody>
    </table>
  );
};
export default SisteResultater;

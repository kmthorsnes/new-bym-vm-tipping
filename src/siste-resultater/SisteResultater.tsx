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
          hjemmelag="Nederland"
          hjemmelagScore={3}
          bortelag="USA"
          bortelagScore={1}
        />
        <SisteResultatKort
          hjemmelag="Argentina"
          hjemmelagScore={2}
          bortelag="Australia"
          bortelagScore={1}
        />
        <SisteResultatKort
          hjemmelag="Frankrike"
          hjemmelagScore={3}
          bortelag="Polen"
          bortelagScore={1}
        />
        <SisteResultatKort
          hjemmelag="England"
          hjemmelagScore={3}
          bortelag="Serbia"
          bortelagScore={0}
        />
      </tbody>
    </table>
  );
};
export default SisteResultater;

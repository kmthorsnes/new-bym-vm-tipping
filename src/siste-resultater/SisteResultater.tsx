import SisteResultatKort from "./SisteResultatKort";

const SisteResultater = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2} className="text-left">
            Siste resultater:
          </th>
        </tr>
      </thead>
      <tbody>
        <SisteResultatKort hjemmelag="Tunisia" hjemmelagScore={0} bortelag="Australia" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Polen" hjemmelagScore={2} bortelag="Saudi-Arabia" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Frankrike" hjemmelagScore={2} bortelag="Danmark" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Argentina" hjemmelagScore={0} bortelag="Mexico" bortelagScore={0} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

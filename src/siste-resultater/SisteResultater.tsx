import SisteResultatKort from "./SisteResultatKort";

const SisteResultater = () => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th colSpan={2} className="text-3xl text-left">
            Siste resultater:
          </th>
        </tr>
      </thead>
      <tbody>
        <SisteResultatKort hjemmelag="Tunisa" hjemmelagScore={1} bortelag="Frankrike" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Australia" hjemmelagScore={1} bortelag="Danmark" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Polen" hjemmelagScore={0} bortelag="Argentina" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Saudi-Arabia" hjemmelagScore={1} bortelag="USA" bortelagScore={2} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

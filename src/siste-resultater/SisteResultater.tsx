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
        <SisteResultatKort hjemmelag="Wales" hjemmelagScore={0} bortelag="Iran" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Qatar" hjemmelagScore={1} bortelag="Senegal" bortelagScore={3} />
        <SisteResultatKort hjemmelag="Nederland" hjemmelagScore={1} bortelag="Ecuador" bortelagScore={1} />
        <SisteResultatKort hjemmelag="England" hjemmelagScore={0} bortelag="Usa" bortelagScore={0} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

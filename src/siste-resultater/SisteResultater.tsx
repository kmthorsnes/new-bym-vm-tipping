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
        <SisteResultatKort hjemmelag="Nederland" hjemmelagScore={2} bortelag="Qatar" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Ecuador" hjemmelagScore={1} bortelag="Senegal" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Wales" hjemmelagScore={0} bortelag="England" bortelagScore={3} />
        <SisteResultatKort hjemmelag="Iran" hjemmelagScore={0} bortelag="USA" bortelagScore={1} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

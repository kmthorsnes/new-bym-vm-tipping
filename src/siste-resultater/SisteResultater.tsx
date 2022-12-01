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
        <SisteResultatKort hjemmelag="Kroatia" hjemmelagScore={0} bortelag="Belgia" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Canada" hjemmelagScore={1} bortelag="Marokko" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Japan" hjemmelagScore={0} bortelag="Spania" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Costa Rica" hjemmelagScore={0} bortelag="Tyskland" bortelagScore={0} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

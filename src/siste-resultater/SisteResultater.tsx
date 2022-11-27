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
        <SisteResultatKort hjemmelag="Japan" hjemmelagScore={0} bortelag="Costa Rica" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Belgia" hjemmelagScore={0} bortelag="Marokko" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Kroatia" hjemmelagScore={4} bortelag="Canada" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Spania" hjemmelagScore={1} bortelag="Tyskland" bortelagScore={1} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

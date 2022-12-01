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
        <SisteResultatKort hjemmelag="Kroatia" hjemmelagScore={0} bortelag="Belgia" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Canada" hjemmelagScore={1} bortelag="Marokko" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Japan" hjemmelagScore={2} bortelag="Spania" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Costa Rica" hjemmelagScore={2} bortelag="Tyskland" bortelagScore={4} />
      </tbody>
    </table>
  );
};
export default SisteResultater;

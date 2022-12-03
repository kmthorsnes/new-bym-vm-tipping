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
        <SisteResultatKort hjemmelag="Sør-Korea" hjemmelagScore={2} bortelag="Portugal" bortelagScore={1} />
        <SisteResultatKort hjemmelag="Ghana" hjemmelagScore={0} bortelag="Uruguay" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Kamerun" hjemmelagScore={1} bortelag="Brasil" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Serbia" hjemmelagScore={2} bortelag="Sveits" bortelagScore={0} />
      </tbody>
    </table>
  );
};
export default SisteResultater;

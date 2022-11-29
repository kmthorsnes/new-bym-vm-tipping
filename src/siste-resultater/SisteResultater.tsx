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
        <SisteResultatKort hjemmelag="Kamerun" hjemmelagScore={3} bortelag="Serbia" bortelagScore={3} />
        <SisteResultatKort hjemmelag="Sør-Korea" hjemmelagScore={2} bortelag="Ghana" bortelagScore={3} />
        <SisteResultatKort hjemmelag="Brasil" hjemmelagScore={1} bortelag="Sveits" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Portugal" hjemmelagScore={2} bortelag="Uruguay" bortelagScore={0} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

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
        <SisteResultatKort hjemmelag="Sveits" hjemmelagScore={1} bortelag="Kamerun" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Uruguay" hjemmelagScore={0} bortelag="Sør-Korea" bortelagScore={0} />
        <SisteResultatKort hjemmelag="Portugal" hjemmelagScore={3} bortelag="Ghana" bortelagScore={2} />
        <SisteResultatKort hjemmelag="Brasil" hjemmelagScore={2} bortelag="Serbia" bortelagScore={0} />
      </tbody>
    </table>
  );

};
export default SisteResultater;

import logo from "/src/assets/images/Oslo-logo-sort-til-skjerm-og-utskrift/Oslo-logo-sort-RGB.svg";

const Oklogo = () => {
  return (
    <div className="flex h-14">
      <img src={logo} className="h-full w-full" alt="logo" />
    </div>
  );
};

export default Oklogo;

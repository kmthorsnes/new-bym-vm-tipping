import fry from "/src/assets/images/shut-up-and-take-my-money.png";

const TakeMyMoney = ({}): JSX.Element => {
  let takemymoneyaudio = new Audio("/takemymoney.mp3");

  const start = () => {
    takemymoneyaudio.play();
  };
  return (
    <>
      <div className="flex cursor-help">
        <img
          className="h-14"
          src={fry}
          onClick={start}
          alt="Shut up and take my money"
        />
      </div>
    </>
  );
};

export default TakeMyMoney;

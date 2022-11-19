const TakeMyMoney = ({}): JSX.Element => {
  let takemymoneyaudio = new Audio("/takemymoney.mp3");

  const start = () => {
    takemymoneyaudio.play();
  };
  return (
    <>
      <div className="flex cursor-pointer">
        <img className="h-14"
          src="/src/assets/images/shut-up-and-take-my-money.png"
          onClick={start}
          alt="Shut up and take my money"
        />
      </div>
    </>
  );
};

export default TakeMyMoney;

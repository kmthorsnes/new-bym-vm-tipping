import { useState } from "react";

const Nintendowcspiller = ({}): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [music, setMusic] = useState(
    new Audio("/src/assets/sounds/music/music.mp3")
  );

  const play = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? music.pause() : music.play();
    console.log(music, isPlaying);
  };
  return (
    <>
      <div className="flex cursor-pointer">
        <img className="h-14"
          src="/src/assets/images/player.png"
          onClick={play}
          alt="Shut up and take my money"
        />
      </div>
    </>
  );
};

export default Nintendowcspiller;

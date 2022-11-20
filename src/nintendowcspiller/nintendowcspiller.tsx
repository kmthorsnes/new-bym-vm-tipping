import { useState } from "react";
import player from '/src/assets/images/player.png'

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
          src={player}
          onClick={play}
          alt="nintendo world cup player"
        />
      </div>
    </>
  );
};

export default Nintendowcspiller;

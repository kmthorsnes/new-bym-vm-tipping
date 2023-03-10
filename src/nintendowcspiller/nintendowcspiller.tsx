import { useState } from "react";
import player from "/src/assets/images/player.png";
import song from "/src/assets/sounds/music/music.mp3";

const Nintendowcspiller = ({}): JSX.Element => {
  const [isPlaying, setIsPlaying] = useState(false);

  const [music, setMusic] = useState(new Audio(song));

  const play = () => {
    setIsPlaying(!isPlaying);
    isPlaying ? music.pause() : music.play();
    console.log(music, isPlaying);
  };
  return (
    <>
      <div className="flex cursor-pointer">
        <img
          className="h-14"
          src={player}
          title="Spill av musikk"
          onClick={play}
          alt="nintendo world cup player"
        />
      </div>
    </>
  );
};

export default Nintendowcspiller;

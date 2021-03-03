import React, { useState, useEffect } from "react";
import music from '../source/fonMusic.mp3'

//https://stackoverflow.com/questions/47686345/playing-sound-in-react-js

const useAudio = () => {
  const [audio] = useState(new Audio(music));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);


  useEffect(()=>{
    playing ? audio.play() : audio.pause()
  },[playing])

  useEffect(() => {
    audio.addEventListener('ended',function () {
        audio.currentTime = 0;
        audio.play();
      }, setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {


  const [playing, toggle] = useAudio(url);

  return (
      <button type="button" className={playing? "btnMusic btnPlay" : "btnMusic btnPause"} onClick={toggle}></button>
      
  );
};

export default Player;
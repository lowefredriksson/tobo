import React, { useEffect, useImperativeHandle, useRef } from "react";
const Audio = React.forwardRef<HTMLAudioElement, { isPlaying: boolean }>(
  function S(props, ref) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    useEffect(() => {
      if (props.isPlaying) {
        audioRef.current?.play();
      }
    }, [props.isPlaying]);
    return (
      <audio ref={audioRef}>
        <source src="musik2.mp3" type="audio/mpeg" />
      </audio>
    );
  }
);

export default Audio;

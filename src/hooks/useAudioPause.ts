import { RefObject, useEffect, useState } from 'react';

type UseAudioPause = [boolean, () => void, () => void];

const useAudioPause = (audioRef: RefObject<HTMLAudioElement>): UseAudioPause => {
  const [isPaused, setIsPaused] = useState(true);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  useEffect(() => {
    if (audioRef.current === null) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [audioRef, isPaused]);

  return [isPaused, handlePause, handlePlay];
};

export default useAudioPause;

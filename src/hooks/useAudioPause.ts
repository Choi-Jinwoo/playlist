import { RefObject, useCallback, useEffect, useState } from 'react';

type UseAudioPause = [boolean, () => void, () => void];

const useAudioPause = (audioRef: RefObject<HTMLAudioElement>): UseAudioPause => {
  const [isPaused, setIsPaused] = useState(true);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const handleKeyPressed = useCallback((e: KeyboardEvent) => {
    if (e.key !== ' ') return;

    if (isPaused) {
      handlePlay();
    } else {
      handlePause();
    }
  }, [isPaused]);

  useEffect(() => {
    if (audioRef.current === null) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [audioRef, isPaused]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);

    return () => window.removeEventListener('keydown', handleKeyPressed);
  }, [handleKeyPressed]);

  return [isPaused, handlePause, handlePlay];
};

export default useAudioPause;

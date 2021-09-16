import { RefObject, useCallback, useEffect, useRef, useState } from 'react';

type UseAudioPause = [boolean, () => void, () => void];

const useAudioPause = (audioRef: RefObject<HTMLAudioElement>): UseAudioPause => {
  const [isPaused, setIsPaused] = useState(true);
  const isFirstRender = useRef(true);

  const handlePause = () => {
    setIsPaused(true);
  };

  const handlePlay = () => {
    setIsPaused(false);
  };

  const handleKeyPressed = useCallback((e: KeyboardEvent) => {
    if (e.key !== ' ') return;

    e.preventDefault();

    if (isPaused) {
      handlePlay();
    } else {
      handlePause();
    }
  }, [isPaused]);

  // isPaused 상태 변경 시 audio element에 적용
  useEffect(() => {
    if (audioRef.current === null) return;

    if (isPaused) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
  }, [audioRef, isPaused]);

  // keyboard event listener 등록
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);

    return () => window.removeEventListener('keydown', handleKeyPressed);
  }, [handleKeyPressed]);

  // audio loadeddata event listener 등록
  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement === null) return;

    const onAudioLoaded = () => {
      if (!isFirstRender.current) {
        audioElement.play()
      } else {
        isFirstRender.current = false;
      }
    };

    audioElement.addEventListener('loadeddata', onAudioLoaded);

    return () => {
      audioElement.removeEventListener('loadeddata', onAudioLoaded);
    };
  }, [audioRef]);

  return [isPaused, handlePause, handlePlay];
};

export default useAudioPause;

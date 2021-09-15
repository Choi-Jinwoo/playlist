import { RefObject, useCallback, useEffect, useState } from 'react';

const KEYS = {
  BACK: 'ArrowLeft',
  FORWARD: 'ArrowRight',
};

const TIMELINE_SYNC_INTERVAL = 500;
const SKIP_SECONDS = 5;

type UseAudioTimeline = [number, number, (second: number) => void];

const useAudioTimeline = (audioRef: RefObject<HTMLAudioElement>): UseAudioTimeline => {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const handleJumpTo = useCallback((second: number) => {
    if (audioRef.current === null) return;

    audioRef.current.currentTime = second;
    setCurrentTime(second);
  }, [audioRef]);

  const handleKeyPressed = useCallback((e: KeyboardEvent) => {
    switch (e.key) {
      case KEYS.BACK:
        e.preventDefault();
        return handleJumpTo(currentTime - SKIP_SECONDS);
      case KEYS.FORWARD:
        e.preventDefault();
        return handleJumpTo(currentTime + SKIP_SECONDS);
    }
  }, [currentTime, handleJumpTo]);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement === null) return;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const onAudioLoaded = () => {
      setDuration(audioElement.duration);

      timer = setInterval(() => {
        if (audioElement === null) return;
        setCurrentTime(audioElement.currentTime);
      }, TIMELINE_SYNC_INTERVAL);
    };

    audioElement.addEventListener('loadeddata', onAudioLoaded);

    return () => {
      if (timer !== null) {
        clearInterval(timer);
      }

      removeEventListener('loadeddata', onAudioLoaded);
    };
  }, [audioRef]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);

    return () => window.removeEventListener('keydown', handleKeyPressed);
  }, [handleKeyPressed]);

  return [currentTime, duration, handleJumpTo];
};

export default useAudioTimeline;

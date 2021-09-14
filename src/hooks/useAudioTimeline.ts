import { RefObject, useCallback, useEffect, useState } from 'react';

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
      case 'ArrowLeft':
        return handleJumpTo(currentTime - SKIP_SECONDS);
      case 'ArrowRight':
        return handleJumpTo(currentTime + SKIP_SECONDS);
    }
  }, [currentTime, handleJumpTo]);

  useEffect(() => {
    if (audioRef.current === null) return;
    let timer: ReturnType<typeof setTimeout> | null = null;

    const onAudioLoaded = () => {
      if (audioRef.current === null) return;

      setDuration(audioRef.current.duration);

      timer = setInterval(() => {
        if (audioRef.current === null) return;
        setCurrentTime(audioRef.current.currentTime);
      }, TIMELINE_SYNC_INTERVAL);
    };

    audioRef.current.onloadeddata = onAudioLoaded;

    return () => {
      if (timer === null) return;
      clearInterval(timer);
    };
  }, [audioRef]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);

    return () => window.removeEventListener('keydown', handleKeyPressed);
  }, [handleKeyPressed]);

  return [currentTime, duration, handleJumpTo];
};

export default useAudioTimeline;

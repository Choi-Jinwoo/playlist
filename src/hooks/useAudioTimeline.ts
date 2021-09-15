import { RefObject, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toNextMusic } from '../actions/music';

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
  const dispatch = useDispatch();

  const handleJumpTo = useCallback((second: number) => {
    if (audioRef.current === null) return;

    let changedTime = second;
    if (second < 0) {
      changedTime = 0;
    } else if (second > duration) {
      changedTime = duration;
    }

    audioRef.current.currentTime = changedTime;
    setCurrentTime(changedTime);
  }, [audioRef, duration]);

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

  // audio가 loaded되면 timeline 동기화 timer 설정
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

  // audio관련 window event listener 등록
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPressed);

    return () => window.removeEventListener('keydown', handleKeyPressed);
  }, [handleKeyPressed]);

  // audio가 끝나면 다음곡으로 이동
  useEffect(() => {
    if (currentTime >= duration) {
      dispatch(toNextMusic());
    }
  }, [currentTime, duration]);


  return [currentTime, duration, handleJumpTo];

};

export default useAudioTimeline;

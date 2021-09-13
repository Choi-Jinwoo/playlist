import React, { useRef } from 'react';
import PageTemplate from '../components/common/PageTemplate';
import AudioControls from '../components/Playlist/AudioControls';
import CDPlayer from '../components/Playlist/CDPlayer';
import useAudioPause from '../hooks/useAudioPause';
import useAudioTimeline from '../hooks/useAudioTimeline';

const PlaylistPage = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPaused, handlePause, handlePlay] = useAudioPause(audioRef);
  const [currentTime, duration, handleJumpTo] = useAudioTimeline(audioRef);

  const handleAutoPaused = () => {
    if (!isPaused) {
      handlePause();
    }
  };

  const handleAutoPlay = () => {
    if (isPaused) {
      handlePlay();
    }
  };

  return (
    <PageTemplate>
      <audio ref={audioRef} hidden={true} onPause={handleAutoPaused} onPlay={handleAutoPlay} >
        <source src="/music/santa-tell-me.mp3" />
      </audio>
      <CDPlayer isPaused={isPaused} thumbnail="https://t1.daumcdn.net/cfile/tistory/2643F34C59242C8E26" />
      <AudioControls
        handleJumpTo={handleJumpTo}
        currentTime={currentTime}
        duration={duration}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPaused={isPaused} />
    </PageTemplate>
  );
};

export default PlaylistPage;

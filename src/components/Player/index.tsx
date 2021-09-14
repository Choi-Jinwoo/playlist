import React, { useRef } from 'react';
import styled from 'styled-components';
import useAudioPause from '../../hooks/useAudioPause';
import useAudioTimeline from '../../hooks/useAudioTimeline';
import AudioControls from './AudioControls';
import CDPlayer from './CDPlayer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Player = (): JSX.Element => {
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
    <Container>
      <audio ref={audioRef} hidden={true} onPause={handleAutoPaused} onPlay={handleAutoPlay} >
        <source src="/music/merry-christmas.mp3" />
      </audio>
      <CDPlayer isPaused={isPaused} thumbnail="https://t1.daumcdn.net/cfile/tistory/2643F34C59242C8E26" />
      <AudioControls
        handleJumpTo={handleJumpTo}
        currentTime={currentTime}
        duration={duration}
        handlePause={handlePause}
        handlePlay={handlePlay}
        isPaused={isPaused} />
    </Container>
  );
};

export default Player;

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import useAudioPause from '../../hooks/useAudioPause';
import useAudioTimeline from '../../hooks/useAudioTimeline';
import { RootState } from '../../reducers';
import AudioControls from './AudioControls';
import CDPlayer from './CDPlayer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Audio = styled.audio``;

const Source = styled.source``;

const Player = (): JSX.Element => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const currentMusic = useSelector((state: RootState) => state.music.currentMusic);
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

  const thumbnail = currentMusic?.thumbnail ?? '';
  const audioSource = currentMusic?.audioSource ?? '';

  useEffect(() => {
    audioRef.current?.load();
  }, [audioSource]);

  return (
    <Container>
      <Audio ref={audioRef} hidden={true} onPause={handleAutoPaused} onPlay={handleAutoPlay} >
        <Source src={audioSource} />
      </Audio>
      <CDPlayer isPaused={isPaused} thumbnail={thumbnail} />
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

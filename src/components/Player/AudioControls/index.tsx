import React, { MouseEvent, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Text from '../../common/Text';
import { FaPlay, FaPause } from 'react-icons/fa';
import theme from '../../../styles/theme';
import { seconds2MinuteSeconds } from '../../../utils/formatter';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonControlsWrapper = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
  justify-content: center;

  .icon {
    cursor: pointer;
    color: ${props => props.theme.color.main1};
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > p {
    width: 50px;
  }
`;

const Timeline = styled.div`
  cursor: pointer;
  position: relative;
  width: 500px;
  height: 6px;
  background-color: ${props => props.theme.color.white};
  border-radius: 10px;
  overflow: hidden;
`;

const PassedTimeline = styled.div`
  position: absolute;
  transform-origin: left;
  width: 100%;
  height: 100%;
  left: 0px;
  background-color: ${props => props.theme.color.main1};
`;

type Props = {
  isPaused: boolean;
  handlePause: () => void;
  handlePlay: () => void;
  handleJumpTo: (time: number) => void;
  currentTime: number;
  duration: number;
}

const AudioControls = ({
  isPaused,
  handlePause,
  handlePlay,
  handleJumpTo,
  currentTime,
  duration,
}: Props): JSX.Element => {
  const passedTimelineRef = useRef<HTMLDivElement>(null);
  const scaleX = currentTime / duration;

  const handleTimelineClicked = (e: MouseEvent<HTMLDivElement>) => {
    const { left } = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - left;
    const time = (x / 500) * duration;
    handleJumpTo(time);
  };

  useEffect(() => {
    if (passedTimelineRef.current === null) return;
    passedTimelineRef.current.style.transform = `scaleX(${scaleX})`;
  }, [scaleX]);

  return (
    <Container>
      <ButtonControlsWrapper>
        {isPaused
          ? <FaPlay className="icon" onClick={handlePlay} />
          : <FaPause className="icon" onClick={handlePause} />}
      </ButtonControlsWrapper>

      <TimelineWrapper>
        <Text
          margin={{ right: 10 }}
          color={theme.color.main1}
        >{seconds2MinuteSeconds(currentTime)}</Text>
        <Timeline onClick={handleTimelineClicked}>
          <PassedTimeline ref={passedTimelineRef} />
        </Timeline>
      </TimelineWrapper>
    </Container >
  );
};

export default AudioControls;

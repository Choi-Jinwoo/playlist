import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import Text from '../../common/Text';
import { FaPlay, FaPause } from 'react-icons/fa';
import theme from '../../../styles/theme';
import { seconds2MinuteSeconds } from '../../../utils/formatter';

const Container = styled.div``;

const ButtonControlsWrapper = styled.div`
  .icon {
    cursor: pointer;
    color: ${props => props.theme.color.main1};
  }
`;

const TimelineWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
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

type PassedTimelineProps = {
  scaleX: number;
}

const PassedTimeline = styled.div<PassedTimelineProps>`
  position: absolute;
  transform-origin: left;
  transform: scaleX(${props => props.scaleX});
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
  const scaleX = currentTime / duration;

  const handleTimelineClicked = (e: MouseEvent<HTMLDivElement>) => {
    const { left } = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = e.clientX - left;
    const time = (x / 500) * duration;
    handleJumpTo(time);
  };

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
          <PassedTimeline scaleX={scaleX} />
        </Timeline>
      </TimelineWrapper>
    </Container >
  );
};

export default AudioControls;

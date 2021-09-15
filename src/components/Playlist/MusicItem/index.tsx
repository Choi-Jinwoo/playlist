import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { select } from '../../../actions/music';
import { Music } from '../../../models/music';
import { RootState } from '../../../reducers';
import Text from '../../common/Text';
import { FaPlay } from 'react-icons/fa';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  cursor: pointer;
  transition: all 0.25s;

  &:hover {
    background-color: ${props => props.theme.color.main2}60;
  }

  & > * {
    flex: 1;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow:ellipsis;
    padding: 0px 5px;
  }

  .center {
    flex: 4;
  }

  .right {
    flex: 2;
  }
`;

const ThumbnailWrapper = styled.div`
  width: 80px;
  height: 80px;
`;

const Thumbnail = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`;

const PlayingWrapper = styled.div`
  color: ${props => props.theme.color.main1};
`;

type Props = {
  music: Music;
}

const MusicItem = ({ music }: Props): JSX.Element => {
  const { id, title, singer, thumbnail } = music;
  const currentMusic = useSelector((state: RootState) => state.music.currentMusic);
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(select(music));
  };

  const isSelected = id === currentMusic?.id;

  return (
    <Container onClick={handleOnClick}>
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail} />
      </ThumbnailWrapper>
      <Text className="center">{title}</Text>
      <Text className="right">{singer}</Text>
      <PlayingWrapper>
        {isSelected && <FaPlay />}
      </PlayingWrapper>
    </Container>
  );
};

export default MusicItem;

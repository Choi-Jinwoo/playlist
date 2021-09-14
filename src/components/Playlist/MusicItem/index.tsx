import React from 'react';
import styled from 'styled-components';
import { Music } from '../../../models/music';
import Text from '../../common/Text';

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

type Props = {
  music: Music;
}

const MusicItem = ({ music }: Props): JSX.Element => {
  const { title, singer, thumbnail } = music;

  return (
    <Container>
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail} />
      </ThumbnailWrapper>
      <Text className="center">{title}</Text>
      <Text className="right">{singer}</Text>
    </Container>
  );
};

export default MusicItem;

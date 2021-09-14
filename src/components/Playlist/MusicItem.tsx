import React from 'react';
import styled from 'styled-components';
import Text from '../common/Text';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 500px;
  padding: 10px;

  & > * {
    flex: 1;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    text-overflow:ellipsis;
    padding: 0px 5px;
  }

  .center {
    text-align: center;
  }

  .right {
    text-align: right;
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

const MusicItem = (): JSX.Element => {
  return (
    <Container>
      <ThumbnailWrapper>
        <Thumbnail src="https://t1.daumcdn.net/cfile/tistory/2643F34C59242C8E26" />
      </ThumbnailWrapper>
      <Text className="center">Santa tell me</Text>
      <Text className="right">아리아나 그란데</Text>
    </Container>
  );
};

export default MusicItem;

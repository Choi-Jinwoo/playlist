import React from 'react';
import styled from 'styled-components';
import useMusics from '../../../hooks/useMusics';
import theme from '../../../styles/theme';
import Text from '../../common/Text';
import MusicItem from '../MusicItem';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: 350px;
  overflow: auto;
  margin-top: 40px;
`;

const MusicList = (): JSX.Element => {
  const [musics] = useMusics();

  if (musics === null) {
    return (
      <div>로딩 중...</div>
    )
  }
  const MusicItems = musics.map(music => <MusicItem key={music.id} music={music} />);

  return (
    <Container>
      <Text weight='bold' size={theme.fontSize.xLarge} color={theme.color.main1}>playlist</Text>
      <ListWrapper>
        {MusicItems}
      </ListWrapper>
    </Container>
  );
};

export default MusicList;

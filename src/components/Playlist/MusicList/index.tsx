import React from 'react';
import styled from 'styled-components';
import useMusics from '../../../hooks/useMusics';
import MusicItem from '../MusicItem';

const Container = styled.div`

`;

const MusicList = (): JSX.Element => {
  const [musics] = useMusics();

  const MusicItems = musics.map(music => <MusicItem key={music.id} music={music} />);

  return (
    <Container>
      {MusicItems}
    </Container>
  );
};

export default MusicList;

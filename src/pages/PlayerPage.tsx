import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Player from '../components/Player';
import MusicList from '../components/Playlist/MusicList';
import Header from '../components/Header';

const PlaylistPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Header />
      <Player />
      <MusicList />
    </PageTemplate>
  );
};

export default PlaylistPage;

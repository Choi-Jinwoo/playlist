import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Player from '../components/Player';
import MusicList from '../components/Playlist/MusicList';

const PlaylistPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Player />
      <MusicList />
    </PageTemplate>
  );
};

export default PlaylistPage;

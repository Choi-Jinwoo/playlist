import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import Player from '../components/Playlist/Player';

const PlaylistPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <Player />
    </PageTemplate>
  );
};

export default PlaylistPage;

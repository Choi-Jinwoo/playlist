import React from 'react';
import PageTemplate from '../components/common/PageTemplate';
import CDPlayer from '../components/Playlist/CDPlayer';

const PlaylistPage = (): JSX.Element => {
  return (
    <PageTemplate>
      <CDPlayer thumbnail="https://img1.daumcdn.net/thumb/R1280x0.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/8fXh/image/M7kpICX4bbcXfuMgX2DH0NT0qeg.png" />
    </PageTemplate>
  );
};

export default PlaylistPage;

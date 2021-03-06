import React from 'react';
import styled from 'styled-components';
import useDirectories from '../../../../hooks/useDirectories';
import DirectoryItem from '../DirectoryItem';
import Text from '../../../common/Text';
import theme from '../../../../styles/theme';

const Container = styled.div`
  padding: 60px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  row-gap: 20px;
`;

type Props = {
  mode: 'dark' | 'light';
}

const DirectoryList = ({ mode = 'light' }: Props): JSX.Element => {
  const [directories] = useDirectories();

  const titleColor = mode === 'dark' ? theme.color.white : theme.color.main1;

  const DirectoryItems = directories
    .map((directory, index) => <DirectoryItem key={directory.id} sequence={index} directory={directory} />);

  return (
    <Container>
      <TitleWrapper>
        <Text size={theme.fontSize.xxxLarge} color={titleColor} weight='bold'>Playlist</Text>
      </TitleWrapper>
      <ListWrapper>
        {DirectoryItems}
      </ListWrapper>
    </Container>
  );
};

export default DirectoryList;

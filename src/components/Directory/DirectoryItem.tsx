import React from 'react';
import styled from 'styled-components';
import { Directory } from '../../models/directory';
import theme from '../../styles/theme';
import Text from '../common/Text';

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    .cover-image {
      transform: scale(1.2);
    }

    .text-emphasize-background {
      transform: scaleX(1);
    }
  }
`;

const CoverImage = styled.img.attrs({
  className: 'cover-image',
})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.2s;
`;

const CoverBackground = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color:${props => props.theme.color.black}90;
  backdrop-filter: blur(5px);
  z-index: 2;
`;

const ContentsWrapper = styled.div`
  position: relative;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 20px;
`;

const TitleWrapper = styled.div`
  position: relative;
  width: fit-content;

  &>p {
    position: relative;
    z-index: 1;
  }
`;

const TextEmphasizeBackground = styled.div.attrs({
  className: 'text-emphasize-background',
})`
  position: absolute;
  transform: scaleX(0);
  transform-origin: left;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: ${props => props.theme.color.main1};
  transition: all 0.2s;
`;

type Props = {
  directory: Directory;
}

const DirectoryItem = ({ directory }: Props): JSX.Element => {
  const { title, description, thumbnail } = directory;
  return (
    <Container>
      <CoverImage src={thumbnail} />
      <CoverBackground />
      <ContentsWrapper>
        <TitleWrapper>
          <Text
            size={theme.fontSize.xxLarge}
            color={theme.color.white2}
          >{title}</Text>
          <TextEmphasizeBackground />
        </TitleWrapper>
        <Text
          margin={{ top: 10 }}
          size={theme.fontSize.medium}
          color={theme.color.main2}
        >{description}</Text>
      </ContentsWrapper>
    </Container >
  );
};

export default DirectoryItem;

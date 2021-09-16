import React from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Directory } from '../../../../models/directory';
import theme from '../../../../styles/theme';
import Text from '../../../common/Text';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;

type ContainerProps = {
  sequence: number;
}

const Container = styled.div<ContainerProps>`
  opacity: 0;
  position: relative;
  width: 380px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  animation: ${fadeIn} 0.8s;
  animation-delay: ${props => props.sequence * 0.1}s;
  animation-fill-mode: forwards;

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
  object-fit: cover;
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
  background-color:${props => props.theme.color.black}80;
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
  sequence: number;
}

const DirectoryItem = ({ sequence, directory }: Props): JSX.Element => {
  const { id, title, description, thumbnail, musics } = directory;

  const coverImage = thumbnail.length === 0 && musics.length > 0 ? musics[0].thumbnail : thumbnail;

  return (
    <Link to={`/player/${id}`}>
      <Container sequence={sequence}>
        <CoverImage src={coverImage} />
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
            color={theme.color.main2}
          >{description}</Text>
        </ContentsWrapper>
      </Container >
    </Link >
  );
};

export default DirectoryItem;

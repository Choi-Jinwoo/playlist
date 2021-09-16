import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaList } from 'react-icons/fa';
import DirectoryList from '../Home/Directory/DirectoryList';
import useModal from '../../hooks/useModal';
import { useParams } from 'react-router';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(20px);
  }

  to {
    opacity: 1;
    transform: translate(0px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(0px);
  }

  to {
    opacity: 0;
    transform: translate(20px);
    visibility: hidden;
  }
`;

const Container = styled.header`
  display: flex;
  justify-content: flex-end;

  .disappear {
    visibility: hidden;
    animation: ${fadeOut} 0.25s;
  }
`;

const MenuListWrapper = styled.div`
  display: flex;
  align-items: center;

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0px;
    }
  }
`;

const DirectoriesButton = styled(FaList)`
  cursor: pointer;
  color: ${props => props.theme.color.main1};
`;

const DirectoryListWrapper = styled.div`
  position: absolute;
  left: 40px;
  z-index: 10;
  background-color: ${props => props.theme.color.black}a0;
  border-radius: 8px;
  padding: 20px 60px;
  height: 95%;
  overflow: auto;
  animation: ${fadeIn} 0.5s;

  & > * {
    width: ${props => props.theme.innerWidth.desktop};
  }
`;

type Params = {
  id: string;
};

const Header = (): JSX.Element => {
  const { id } = useParams<Params>();
  const [isDirectoriesOpen, handleOpenDirectories, handleCloseDirectories] = useModal(false, 'directory-list-wrapper');

  useEffect(() => {
    handleCloseDirectories();
  }, [id])

  return (
    <Container>
      <MenuListWrapper>
        <DirectoriesButton onClick={handleOpenDirectories} />
      </MenuListWrapper>

      <DirectoryListWrapper className={`directory-list-wrapper ${isDirectoriesOpen ? 'appear' : 'disappear'}`}>
        <DirectoryList mode='dark' />
      </DirectoryListWrapper>
    </Container>
  )
}

export default Header;
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaList } from 'react-icons/fa';
import DirectoryList from '../Home/Directory/DirectoryList';
import useModal from '../../hooks/useModal';

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

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
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
  background-color: ${props => props.theme.color.black}90;
  border-radius: 8px;
  padding: 20px 60px;
  height: 95%;
  overflow: auto;
  animation: ${fadeIn} 0.5s;

  & > * {
    width: ${props => props.theme.innerWidth.desktop};
  }
`;

const Header = (): JSX.Element => {
  const [isDirectoriesOpen, handleOpenDirectories] = useModal(false, 'directory-list-wrapper');

  return (
    <Container>
      <MenuListWrapper>
        <DirectoriesButton onClick={handleOpenDirectories} />
      </MenuListWrapper>

      {isDirectoriesOpen &&
        <DirectoryListWrapper className="directory-list-wrapper">
          <DirectoryList />
        </DirectoryListWrapper>
      }
    </Container>
  )
}

export default Header;
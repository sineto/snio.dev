import styled from 'styled-components';
import headerBgArtifacts from '../../public/header-bg-artifacts.png';

const Container = styled.div``;
const Header = styled.div`
  width: 100%;
  height: 796px;
  padding: 2.5rem 7.5rem;
  background-color: ${({ theme }) => theme.gray1};
  background-image: url(${headerBgArtifacts});
  background-repeat: no-repeat;
  background-position: right;
`;

export {
  Container,
  Header
}
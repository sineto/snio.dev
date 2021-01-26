import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';
import headerBgArtifacts from '../public/header-bg-artifacts.png';

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

const HeaderTopBar = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavContact = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 50px;
  }
`;

const HeaderNavContactButton = styled.button`
  width: 45px;
  height: 45px;
  background: ${({ theme }) => theme.gray2};
  border: none;
  border-radius: 45px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const EnvelopeIcon = styled(FaEnvelope)`
  transform: scale(1.4);
  color: ${({ theme }) => theme.green};
`;

export {
  Container,
  Header,
  HeaderTopBar,
  HeaderNavContact,
  HeaderNavContactButton,

  EnvelopeIcon
}
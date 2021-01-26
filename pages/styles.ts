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
  margin-bottom: 120px;

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

const HeaderHeroContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderHeroDisclaimer = styled.div`
  font-family: 'Roboto Mono';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & > * {
    margin-bottom: 30px;
  }
`;

const HeroDisclaimerTag = styled.div`
  font-weight: 500;
  font-size: 15px;
  color: ${({ theme }) => theme.gray1};
  background: ${({ theme }) => theme.green};
  border-radius: 3px;
  padding: 8px 11px;
`;

const HeroDisclaimerTitle = styled.h1`
  font-size: 45px;
  font-weight: 400;
`;

const HeroDisclaimerSubTitle = styled.p`
  font-size: 30px;
  color: ${({ theme }) => theme.gray4};
`;

const HeroContactButton = styled.button`
  font-family: 'Roboto Mono';
  font-size: 20px;
  color: ${({ theme }) => theme.green};
  background: transparent;
  border: 2px solid ${({ theme }) => theme.green};
  border-radius: 3px;
  padding: 9px 18px;
  margin: 30px 0;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.gray1};
    background: ${({ theme }) => theme.green};
  }
`;

const HeroTechLogosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 95px;
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
  HeaderHeroContent,
  HeaderHeroDisclaimer,
  HeroDisclaimerTag,
  HeroDisclaimerTitle,
  HeroDisclaimerSubTitle,
  HeroContactButton,
  HeroTechLogosContainer,

  EnvelopeIcon
}
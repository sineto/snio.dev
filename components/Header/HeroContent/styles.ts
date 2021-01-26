import styled from 'styled-components';

const HeaderHeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

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
  font-size: 35px;
  font-weight: 400;
`;

const HeroDisclaimerSubTitle = styled.p`
  font-size: 20px;
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


export {
  HeaderHeroContent,
  HeaderHeroDisclaimer,
  HeroDisclaimerTag,
  HeroDisclaimerTitle,
  HeroDisclaimerSubTitle,
  HeroContactButton,
  HeroTechLogosContainer
}
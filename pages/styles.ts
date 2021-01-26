import styled from 'styled-components';

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
`;

const IntroduceContent = styled.div`
  max-width: 1200px;
  background: transparent;
  padding: 7.5rem 0;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const IntroduceSkills = styled.div`
  display: flex;
  flex-direction: column;
  jusitify-content: center;
  align-items: center;
  gap: 15px;
`;

const SkillCard = styled.div`
  width: 491px;
  font-family: 'Roboto Mono';
  font-weight: 400;
  background: ${({ theme }) => theme.gray1};
  border-radius: 8px;
  padding: 40px;

  &:hover {
    box-shadow: 1px 29px 35px -8px rgba(0,0,0,0.41);
    h3 {
      color: ${({ theme }) => theme.green};
    }
  }
`;

const SkillCardBody = styled.div`
  margin-bottom: 22px;
`;

const SkillCardTitle = styled.h3`
  font-weight: 400;
  font-size: 25px;
  color: ${({ theme }) => theme.white};
  margin-bottom: 4px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SkillCardDesc = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.gray4};
`;

const SkillCardLinkCustomers = styled.span`
  font-size: 14px;
  text-transform: uppercase;

  &:hover {
    border-bottom: 1px dotted;
  }
`;

const IntroduceAbout = styled.div`
  font-family: 'Roboto Mono';
  color: ${({ theme }) => theme.gray4};
  padding: 2.5rem;
  margin-left: 7.5rem;
`;

const AboutTag = styled.p`
  font-size: 16px;
  margin-bottom: 16px;
`;

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const AboutTitle = styled.h2`
  font-weight: 500;
  color: ${({ theme }) => theme.white};
`;

const AboutBody = styled.p`
  font-size: 20px;
`;

export {
  Container,
  IntroduceContent,
  IntroduceSkills,
  SkillCard,
  SkillCardBody,
  SkillCardTitle,
  SkillCardDesc,
  SkillCardLinkCustomers,
  IntroduceAbout,
  AboutTag,
  AboutContent,
  AboutTitle,
  AboutBody
}
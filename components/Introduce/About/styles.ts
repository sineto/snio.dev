import styled from 'styled-components';

const IntroduceAbout = styled.div`
  font-family: 'Roboto Mono';
  color: ${({ theme }) => theme.gray4};
  padding: 2.5rem;
  margin-left: calc(6.5rem - 2.5rem);
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
  font-weight: 400;
  color: ${({ theme }) => theme.white};
`;

const AboutDevName = styled.span`
  border-bottom: 1px dotted ${({ theme }) => theme.white};
`;

const AboutBody = styled.p`
  font-size: 20px;

  span {
    color: ${({ theme }) => theme.green};
  }
`;

export {
  // IntroduceContent,
  // IntroduceSkills,
  IntroduceAbout,
  AboutTag,
  AboutContent,
  AboutTitle,
  AboutDevName,
  AboutBody
}

import styled from 'styled-components';

const TechContributions = styled.div`
  background: ${({ theme }) => theme.gray1};
  padding: 7.5rem;
`;

const TechContributionsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

const MoreRepos = styled.a`
  font-family: 'Roboto Mono';
  font-weight: 500;
  color: ${({ theme }) => theme.green};
  background: rgba(37, 38, 42, 0.6);
  border-radius: 8px;
  padding: 28px 40px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export { TechContributions, TechContributionsContent, MoreRepos };

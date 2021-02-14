import styled from 'styled-components';

const TechContentCards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TechContentHeader = styled.div`
  max-width: 590px;
  height: 179px;
  font-family: 'Roboto Mono';
  padding: 0 40px 26px 0;

  flex-basis: 100%;

  h1 {
    font-size: 38px;
    font-weight: 500;
  }

  p {
    font-size: 18px;
    color: ${({ theme }) => theme.gray4};
  }
`;

const TechRepositoryCard = styled.div`
  max-width: 590px;
  font-family: 'Roboto Mono';
  background: rgba(37, 38, 42, 0.6);
  border-radius: 8px;
  padding: 28px 40px;

  flex-basis: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;

  &:hover {
    background: rgba(37, 38, 42, 1);

    h2 {
      color: ${({ theme }) => theme.green};
    }

    .iconLink {
      color: ${({ theme }) => theme.green};
      visibility: visible;
    }
  }
`;

const RepositoryCardHeader = styled.div`
  h2 {
    font-size: 18px;
    color: ${({ theme }) => theme.white};
    cursor: pointer;
    margin-bottom: 6px;

    display: flex;
    align-items: center;
    gap: 12px;

    span {
      width: 22px;
      height: 22px;
      visibility: hidden;
    }
  }

  p {
    font-size: 14px;
    color: ${({ theme }) => theme.gray4};
  }
`;

const RepositoryCardSpecs = styled.ul`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.gray4};
  display: flex;
  gap: 26px;

  li {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  li:first-child {
    span {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: tomato;
      border-radius: 12px;
    }
  }
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

export {
  TechContentCards,
  TechContentHeader,
  TechRepositoryCard,
  RepositoryCardHeader,
  RepositoryCardSpecs,
  MoreRepos
};

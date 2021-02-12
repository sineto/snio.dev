import styled from 'styled-components';

const Container = styled.div`
  // display: flex;
  // flex-direction: column;
`;

const TechContributions = styled.div`
  background: ${({ theme }) => theme.gray1};
  padding: 7.5rem;
`;

const TechContributionsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TechContentRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 26px;
`;

const TechContentColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  gap: 26px
`;

const TechContentHeader = styled.div`
  max-width: 590px;
  height: 177px;
  font-family: 'Roboto Mono';
  padding: 0 40px 26px 0;

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
  letter-spacing: 1px;
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

export {
  Container,
  TechContributions,
  TechContributionsContent,
  TechContentRow,
  TechContentColumn,
  TechContentHeader,
  TechRepositoryCard,
  RepositoryCardHeader,
  RepositoryCardSpecs
}

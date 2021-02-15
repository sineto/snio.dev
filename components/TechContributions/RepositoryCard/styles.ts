import styled from 'styled-components';

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

export { TechRepositoryCard, RepositoryCardHeader, RepositoryCardSpecs };

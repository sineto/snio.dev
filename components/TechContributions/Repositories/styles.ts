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

export { TechContentCards, TechContentHeader };

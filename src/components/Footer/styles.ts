import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  padding: 3rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LogoContactSocial = styled.ul`
  display: flex;
  align-items: center;

  li {
    margin: 5px 7px;
  }
`;

const CopyRight = styled.div`
  font-family: 'Roboto Mono';
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-weight: 600;
    font-size: 1.6rem;
  }

  span {
    font-weight: 400;
    font-size: 0.9rem;
  }
`;

const Information = styled.div`
  font-family: 'Roboto Mono';
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-weight: 400;
    font-size: 0.9rem;
    color: ${({ theme }) => theme.gray4};
  }

  div {
    font-weight: 600;
    font-size: 0.9rem;
    text-align: right;
  }
`;

export { Container, LogoContact, LogoContactSocial, CopyRight, Information };

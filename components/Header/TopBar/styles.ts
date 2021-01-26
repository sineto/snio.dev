import styled from 'styled-components';
import { FaEnvelope } from 'react-icons/fa';

const HeaderTopBar = styled.div`
  width: 1200px;
  margin: 0 auto 120px auto;

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

const EnvelopeIcon = styled(FaEnvelope)`
  transform: scale(1.4);
  color: ${({ theme }) => theme.green};
`;

export {
  HeaderTopBar,
  HeaderNavContact,
  HeaderNavContactButton,
  EnvelopeIcon
}
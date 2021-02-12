import styled from 'styled-components';

const SkillCard = styled.div`
  width: 491px;
  font-family: 'Roboto Mono';
  font-weight: 400;
  background: ${({ theme }) => theme.gray1};
  border-radius: 8px;
  padding: 30px 40px;

  &:hover {
    box-shadow: 0px 17px 20px -5px rgba(0,0,0,0.4);
    h3 {
      color: ${({ theme }) => theme.green};
    }
    z-index: 1;
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
export {
  SkillCard,
  SkillCardBody,
  SkillCardTitle,
  SkillCardDesc,
  SkillCardLinkCustomers
}

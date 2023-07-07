import styled from '@emotion/styled';

export const List = styled.ul`
  margin-top: 12px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: ${props => ` 2px solid ${props.theme.colors.white}`};
  border-radius: 4px;
  gap: 8px;
  margin-top: 12px;
`;

export const ContactName = styled.p`
  margin: 0;
  color: ${props => props.theme.colors.primaryText};
  font-weight: 500;
  padding-left: 4px;
`;

export const ContactNumber = styled.span`
  color: ${props => props.theme.colors.primaryText};
  margin-left: 8px;
`;


export const Delete = styled.button`
  cursor: pointer;
  background-color: ${props => props.theme.colors.white};
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  padding: 12px;
  &:hover {
    background-color: ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
  }

  &:active {
    background-color:  ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
    box-shadow: none;
    transform: translateY(1px);
  }
`;


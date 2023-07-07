import styled from '@emotion/styled';

export const Form = styled.form`
  width: 320px;
  margin: 12px auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.colors.primaryText};
`;

export const InputForm = styled.input`
  display: block;
  font-size: 14px;
  padding: 12px;
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.white};
`;

export const ButtonAdd = styled.button`
  cursor: pointer;
  font-size: 14px;
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  padding: 12px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0 1px 6px rgba(46, 47, 66, 0.08);

  &:hover {
    background-color: ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
  }

  &:active {
    background-color: ${props => props.theme.colors.yellow};
    border: ${props => ` 1px solid ${props.theme.colors.yellow}`};
    box-shadow: none;
    transform: translateY(1px);
  }
`;


import styled from '@emotion/styled';

export const FilterForm = styled.form`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 16px;
  color: ${props => props.theme.colors.primaryText};
`;
export const Input = styled.input`
  display: block;
  font-size: 14px;
  padding: 12px;
  border: ${props => ` 1px solid ${props.theme.colors.grey}`};
  border-radius: 4px;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.white};
`;


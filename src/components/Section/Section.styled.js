import styled from '@emotion/styled';

export const SectionContainer = styled.section`
  margin-top: 12px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding: 8px;
  background-color: ${props => props.theme.colors.skyblue};
  border-radius: 8px;
  box-shadow: 0 3px 1px rgba(0, 0, 0, 0.1), 0 2px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12);
`;

export const Title = styled.h1`
  margin: 0 auto 12px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: ${props => props.theme.colors.primaryText};
  background-color: ${props => props.theme.colors.white};
  font-size: 24px;
  font-weight: 700;
  border-radius: 8px;

`;

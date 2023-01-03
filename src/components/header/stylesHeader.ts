import styled from "styled-components";

export const ContainerHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${(props) => props.theme.colors.header};
  color: ${(props) => props.theme.colors.color};
  text-align: center;
  padding: 1em;
`;

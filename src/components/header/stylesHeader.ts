import styled from "styled-components";

export const ContainerHeader = styled.header`
  background-color: #000;
  /* color: #61dafb; */
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
  padding: 1em;
`;

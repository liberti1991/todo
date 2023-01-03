import styled from "styled-components";

export const OverlayModal = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 50;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerModal = styled.section`
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 10px;
  color: black;
  min-width: 350px;
  min-height: 200px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  > section {
    padding: 10px;
  }
`;

export const HeaderModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #61dafb;
  border-radius: 10px 10px 0 0;
  color: #000;
  padding: 5px 10px;
  font-style: italic;

  svg {
    cursor: pointer;
    padding: 5px;
    border-radius: 5px;
    background-color: #282c34;
    color: #fff;
    width: 25px;
    height: 25px;

    :hover {
      color: #61dafb;
      background-color: #17191c;
    }
  }
`;

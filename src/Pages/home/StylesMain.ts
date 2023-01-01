import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;

  > section {
    padding: 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

    h4 {
      border-bottom: 1px solid #d4d4d4;
      margin-bottom: 6px;
    }
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  margin: 10px 0;

  > label {
    font-size: 11px;
    text-transform: uppercase;
    padding: 0 5px;
    position: absolute;
    left: 10px;
    top: -6px;
    background: white;
  }

  > input {
    font-size: 13px;
    width: 100%;
    padding: 10px 10px 6px;
    border-radius: 5px;
    border: 1px solid #282c34;

    ::placeholder {
      font-size: 12px;
    }

    :focus {
      border-color: #61dafb;
    }
  }

  > textarea {
    resize: none;
    border-radius: 5px;
    width: 100%;
    padding: 5px 10px;
    border: 1px solid #282c34;

    ::placeholder {
      font-size: 12px;
    }

    :focus {
      border-color: #61dafb;
    }
  }

  > span {
    color: red;
    font-size: 12px;
  }
`;

export const InputSubmit = styled.input`
  border: 1px solid #61dafb;
  background-color: #61dafb;
  width: 100%;
  color: 0.5;
  cursor: pointer;
  transition: 0.5s;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

  :hover {
    background-color: #fff;
    border-color: #282c34;
  }
`;

export const ContainerTaskList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 5px;
  border-bottom: 1px solid #d4d4d4;
  margin-bottom: 5px;

  > p {
    font-size: 14px;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 10px;

    > svg {
      cursor: pointer;
      padding: 5px;
      border-radius: 5px;
      background-color: #282c34;
      color: #fff;
      width: 25px;
      height: 25px;

      :hover {
        color: #61dafb;
      }
    }
  }
`;

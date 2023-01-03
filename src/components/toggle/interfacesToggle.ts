import styled from "styled-components";

export const ToggleBtn = styled.div`
  margin-top: 5px;

  input {
    display: none;
  }

  label {
    font-weight: bold;
    font-size: 8px;
    display: inline-block;
    width: 40px;
    height: 10px;
    background-color: #e7e2cd;
    border-radius: 30px;
    position: relative;
    cursor: pointer;
  }

  label::after {
    content: attr(data-label-off);
    width: 22px;
    height: 22px;
    color: #e7e2cd;
    background-color: #808080;
    border: 2px solid #e7e2cd;
    border-radius: 50%;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: -8px;
    left: 0;
    line-height: 0;
    display: grid;
    place-content: center;
    transition: all 0.5s;
    transform: 1s ease-in;
  }

  input:checked + label::after {
    content: attr(data-label-on);
    background-color: #2d4064;
    transform: translateX(20px) rotate(360deg);
  }
`;

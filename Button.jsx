import React, { useState } from "react";
import styled from "styled-components";
import "./styles/fonts.css";

const UIButton = styled.button`
  background-color: rgba(52, 52, 52, 0.2);
  color: black;
  font-size: 20px;
  font-family: Bebas;
  padding: 10px 60px;
  border-radius: 2px;
  border-color: black;
  border-style: solid;
  margin: 10px 0px;
  cursor: pointer;
`;
const ButtonToggle = styled(UIButton)`
  opacity: 0.6;
  &:hover {
    background-color: #444444;
  }
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    background-color: white;
    &:hover {
        background-color: white;
      }
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["Twitch", "Youtube"];
function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map((type) => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ToggleGroup;

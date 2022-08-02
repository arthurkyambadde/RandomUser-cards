import React from "react";
import styled from "styled-components";

const ChangeThemeButton = styled.button`
  box-shadow: 3px 4px 0px 0px #899599;
  background: linear-gradient(to bottom, #ededed 5%, #bab1ba 100%);
  background-color: #ededed;
  border-radius: 15px;
  border: 1px solid #d6bcd6;
  cursor: pointer;
  color: green;
  font-size: 17px;
  padding: 7px 25px;
  text-shadow: 0px 1px 0px #e1e2ed;
  position: absolute;
  top: 50px;
  right: 50px;

  &:hover {
    background: linear-gradient(to bottom, #bab1ba 5%, #ededed 100%);
    background-color: #bab1ba;
  }
  &:active {
    transform: scale(1.1);
  }
`;

class ThemeButton extends React.Component {
  render() {
    return <ChangeThemeButton>Theme</ChangeThemeButton>;
  }
}

export default ThemeButton;

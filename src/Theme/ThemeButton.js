import React from "react";
import styled from "styled-components";

const themeButton = styled.button`
  width: 100px;
`;

class ThemeButton extends React.Component {
  render() {
    return <button>Theme</button>;
  }
}

export default ThemeButton;

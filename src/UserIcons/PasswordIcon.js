import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  stroke: green;
  width: 48px;
  height: 48px;
`;

class PasswordIcon extends React.Component {
  render() {
    return (
      <div>
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </Icon>
      </div>
    );
  }
}

export default PasswordIcon;

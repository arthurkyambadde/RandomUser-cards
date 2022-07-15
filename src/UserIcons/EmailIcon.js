import React from "react";
import styled from "styled-components";

const Icon = styled.svg`
  stroke: green;
  width: 48px;
  height: 48px;
`;

class EmailIcon extends React.Component {
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
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </Icon>
      </div>
    );
  }
}

export default EmailIcon;

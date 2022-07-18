import React from "react";
import styled from "styled-components";
import { Icon } from "./UserIcons";

class BirthdayIcon extends React.Component {
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
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </Icon>
      </div>
    );
  }
}

export default BirthdayIcon;

import React from "react";
import styled from "styled-components";

const NameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NameIntro = styled.p`
  color: grey;
`;

const Name = styled.h1`
  font-weight: 500;
  color: #111;
  margin: 0;
`;

class UserName extends React.Component {
  render() {
    return (
      <NameWrapper>
        <NameIntro>Hi My name is</NameIntro>
        <Name>Carrie Nicholas</Name>
      </NameWrapper>
    );
  }
}

export default UserName;

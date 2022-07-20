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
    const userNames = this.props.name;
    // console.log(userNames);

    return (
      <NameWrapper>
        <NameIntro>Hi My name is</NameIntro>
        <Name>
          {userNames.title} {userNames.first} {userNames.last}
        </Name>
      </NameWrapper>
    );
  }
}

export default UserName;

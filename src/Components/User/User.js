import React from "react";
import styled from "styled-components";
import Image from "./logo192.png";
import UserName from "../UserDetails/UserName";
import UserIcons from "../../UserIcons/UserIcons";

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid grey;
`;

class User extends React.Component {
  render() {
    return (
      <UserContainer>
        <UserImage src={Image} />
        <UserName />
        <UserIcons />
      </UserContainer>
    );
  }
}
export default User;

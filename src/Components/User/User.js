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
  max-width: 700px;
  max-height: 500px;
  min-height: 200px;
  min-width: 400px;
  border: 3px solid grey;
  border-radius: 6px;
  padding: 20px;
`;

const UserImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid grey;
`;

class User extends React.Component {
  render() {
    const user = this.props.userItem;

    return (
      <UserContainer>
        <UserImage src={user.picture.large} />
        <UserName />
        <UserIcons />
      </UserContainer>
    );
  }
}
export default User;

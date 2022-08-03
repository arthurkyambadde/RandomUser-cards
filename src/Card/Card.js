import React from "react";
import styled from "styled-components";
// import { AppThemeContext } from "../App";
import User from "../Components/User/User";
import { ThemeContext } from "../context/ThemeContext";

const ListItem = styled.ul`
  list-style: none;

  background-color: ${({ theme }) => (theme === "light" ? "#fff" : "#000")};
`;

class Card extends React.Component {
  static contextType = ThemeContext;
  render() {
    const usersList = this.props.users;

    const userListItem = usersList.map((user) => (
      <ListItem theme={this.context} key={user.name.first}>
        <User userItem={user}></User>
      </ListItem>
    ));
    return <>{userListItem}</>;
  }
}

export default Card;

import React from "react";
import styled from "styled-components";
import User from "../Components/User/User";
const CardContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
`;

const ListItem = styled.li`
  list-style: none;
`;

class Card extends React.Component {
  render() {
    const usersList = this.props.users;
    console.log(usersList);

    const userListItem = usersList.map((user) => (
      <ListItem>
        <User userItem={user}></User>
      </ListItem>
    ));
    return <CardContainer>{userListItem}</CardContainer>;
  }
}

export default Card;

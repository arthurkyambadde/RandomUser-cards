import React from "react";
import styled from "styled-components";
import UserInfo from "../UserDetails/UserName";
import UserIcons from "../../UserIcons/UserIcons";
// import classes from "./App.module.css";

const UserContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  min-height: 250px;
  min-width: 500px;
  border: 3px solid grey;
  border-radius: 6px;
  padding: 20px;
`;

const UserImage = styled.img`
  padding: 5px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid grey;
`;

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: "01",
    };
  }

  changeActiveIcon = (id) => {
    this.setState({
      activeId: id,
    });
  };

  render() {
    const user = this.props.userItem;

    return (
      <UserContainer>
        <UserImage src={user.picture.large} />
        <UserInfo userInfo={this.state.activeId} user={user} />
        <UserIcons
          activeId={this.state.activeId}
          changeActiveIcon={this.changeActiveIcon}
        />
      </UserContainer>
    );
  }
}
export default User;

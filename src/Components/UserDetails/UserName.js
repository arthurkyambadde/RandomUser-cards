import React from "react";
import styled from "styled-components";
import { ThemeContext } from "../../context/ThemeContext";

const UserWrapper = styled.div`
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
  color: ${({ theme }) => (theme === "light" ? "#000" : "red")};
  margin: 0;
`;

class UserInfo extends React.Component {
  static contextType = ThemeContext;

  render() {
    console.log(ThemeContext);
    console.log(this.context);
    // console.log("~~~~~~~###############");
    // const userNames = this.props.name;
    // console.log(userNames);
    const activeIconId = this.props.userInfo;
    // console.log(activeIconId);

    const userObject = this.props.user;
    // console.log(userObject);
    let title;
    let userDetail;
    if (activeIconId === "01") {
      title = "name";
      userDetail = `${userObject.name.title} ${userObject.name.first}  ${userObject.name.last} `;
    }

    if (activeIconId === "02") {
      title = "email address";
      userDetail = `${userObject.email} `;
    }

    let dob = new Date(userObject.dob.date)
      .toLocaleString("en-US")
      .slice(0, 10);
    // console.log(dob);

    if (activeIconId === "03") {
      title = "birthday";
      userDetail = `${dob}`;
    }

    if (activeIconId === "04") {
      title = "address";
      userDetail = `${userObject.location.street.name} , ${userObject.location.street.number} `;
    }

    if (activeIconId === "05") {
      title = "phone number";
      userDetail = ` + ${userObject.cell} `;
    }

    if (activeIconId === "06") {
      title = "password";
      userDetail = `${userObject.login.password} `;
    }

    return (
      <UserWrapper theme={this.context}>
        <NameIntro>Hi, my {title} is</NameIntro>
        <Name theme={this.context}>{userDetail}</Name>
      </UserWrapper>
    );
  }
}

export default UserInfo;

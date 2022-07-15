import React from "react";
import styled from "styled-components";
import NameIcon from "./NameIcon";
import EmailIcon from "./EmailIcon";
import BirthdayIcon from "./BirthdayIcon";
import LocationIcon from "./LocationIcon";
import PhoneIcon from "./PhoneIcon";
import PasswordIcon from "./PasswordIcon";

const User = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;
  margin-top: 30px;
`;

class UserIcons extends React.Component {
  render() {
    return (
      <User>
        <NameIcon />
        <EmailIcon />
        <BirthdayIcon />
        <LocationIcon />
        <PhoneIcon />
        <PasswordIcon />
      </User>
    );
  }
}

export default UserIcons;

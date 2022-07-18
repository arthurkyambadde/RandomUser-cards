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
  list-style: none;
`;

export const Icon = styled.svg`
  stroke: #888;
  width: 48px;
  height: 48px;
  cursor: pointer;
  transition: all 0.25s ease-out;
  &:hover {
    stroke: #83ba43;
    transform: translateY(0% to 100%);
    border-top: 3px solid #83ba43;
  }
`;

class UserIcons extends React.Component {
  render() {
    const Icons = [
      <NameIcon />,
      <EmailIcon />,
      <BirthdayIcon />,
      <LocationIcon />,
      <PhoneIcon />,
      <PasswordIcon />,
    ];

    const ListItems = Icons.map((Icon, i) => <li key={i}>{Icon}</li>);

    return <User>{ListItems}</User>;
  }
}

export default UserIcons;

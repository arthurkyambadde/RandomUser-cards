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
  align-items: center;
  justify-content: center;
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
`;

const ListItem = styled.li`
  &.active > div > svg {
    stroke: #83ba43;
    transform: translateY(0% to 100%);
    border-top: 3px solid #83ba43;
  }
`;

class UserIcons extends React.Component {
  render() {
    const { activeId } = this.props;
    const iconsList = [
      { id: "01", name: "name", icon: <NameIcon /> },
      { id: "02", name: "email", icon: <EmailIcon /> },
      { id: "03", name: "birthday", icon: <BirthdayIcon /> },
      { id: "04", name: "location", icon: <LocationIcon /> },
      { id: "05", name: "phoneNumber", icon: <PhoneIcon /> },
      { id: "06", name: "password", icon: <PasswordIcon /> },
    ];

    const listItems = iconsList.map((icon) => {
      let className = "";
      if (activeId === icon.id) {
        className = "active";
      }

      return (
        <ListItem
          className={className}
          key={icon.id}
          onMouseEnter={() => this.props.changeActiveIcon(icon.id)}
        >
          {icon.icon}
        </ListItem>
      );
    });

    return <User>{listItems}</User>;
  }
}

export default UserIcons;

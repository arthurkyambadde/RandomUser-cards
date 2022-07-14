import React from "react";
import classes from "./Users.module.css";
import User from "../User/User";

class Users extends React.Component {
  render() {
    return (
      <div className={classes["Users_container"]}>
        hello
        <User />
      </div>
    );
  }
}

export default Users;

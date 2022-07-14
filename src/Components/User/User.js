import React from "react";
import classes from "./User.module.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      user: null,
    };
  }

  async componentDidMount() {
    const url = "https://randomuser.me/api/";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results[0]);
    this.setState({
      user: data.results[0],
      loading: !this.state.loading,
    });
  }

  render() {
    return (
      <div>
        {this.state.loading && !this.state.user ? (
          <div>loading......</div>
        ) : (
          <div>
            <img src={this.state.user.picture.large} />
            <div>{this.state.user.gender}</div>
          </div>
        )}
      </div>
    );
  }
}

export default User;

import Card from "./Card/Card";
import styled from "styled-components";
import React from "react";

const AppView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.results);
        this.setState({
          users: data.results,
          loading: true,
        });
      });
  }

  render() {
    return (
      <AppView>
        <Card users={this.state.users}></Card>
      </AppView>
    );
  }
}

export default App;

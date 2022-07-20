import Card from "./Card/Card";
import styled from "styled-components";
import React from "react";
// import Calculator from "./Components/calculator/Calculator";
const AppView = styled.div`
  width: 100vw;
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
        // console.log(data.results);
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
        {/* <Calculator /> */}
      </AppView>
    );
  }
}

export default App;

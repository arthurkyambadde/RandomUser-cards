import Card from "./Card/Card";
import styled, { keyframes } from "styled-components";
import React from "react";

// import Calculator from "./Components/calculator/Calculator";
const AppView = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingSpinner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  &::after {
    content: "";
    height: 100px;
    width: 100px;
    border-top: 10px solid #009579;
    border-bottom: 10px solid #009579;
    border-radius: 50%;
    animation: ${rotate} 0.5s linear infinite;
  }
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
    let display;

    if (this.state.loading === false) {
      return (display = <LoadingSpinner>loading....</LoadingSpinner>);
    } else {
      return (display = (
        <div>
          <Card users={this.state.users}></Card>;{/* <Calculator /> */}
        </div>
      ));
    }

    return <AppView>{display}</AppView>;
  }
}

export default App;

import Card from "./Card/Card";
import styled, { keyframes } from "styled-components";
import React from "react";
import ThemeButton from "./Theme/ThemeButton";

// import Calculator from "./Components/calculator/Calculator";

const AppContainer = styled.div`
  padding: 100px;
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

const ThemeContext = React.createContext("light");

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
    <ThemeContext.Provider></ThemeContext.Provider>;
    if (this.state.loading === false) {
      return <LoadingSpinner></LoadingSpinner>;
    } else {
      return (
        <ThemeContext.Provider value="dark">
          <AppContainer>
            <ThemeButton />
            <Card users={this.state.users}></Card>;{/* <Calculator /> */}
          </AppContainer>
        </ThemeContext.Provider>
      );
    }
  }
}

export default App;

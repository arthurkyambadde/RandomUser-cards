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
  render() {
    return (
      <AppView>
        <Card></Card>
      </AppView>
    );
  }
}

export default App;

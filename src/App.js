import Card from "./Card/Card";
import styled from "styled-components";

const AppView = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <AppView>
      <Card></Card>
    </AppView>
  );
}

export default App;

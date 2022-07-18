import React from "react";
import Users from "../Components/Users/Users";
import styled from "styled-components";

const CardContainer = styled.div`
  position: absolute;
  top: 50%;

  transform: translateX(50%);
  transform: translateY(-50%);
  max-width: 700px;
  max-height: 500px;
  min-height: 200px;
  min-width: 400px;
  border: 1px solid grey;
  border-radius: 6px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <CardContainer>
        <Users />
      </CardContainer>
    );
  }
}

export default Card;

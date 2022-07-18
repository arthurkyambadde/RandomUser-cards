import React from "react";
import BoilingPointVerdict from "./BoilingPointVerdict";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      temperature: e.target.value,
    });
  };

  render() {
    const temperature = this.state.temperature;
    console.log(temperature);
    return (
      <fieldset>
        <legend>Enter Temperature in celsius</legend>
        <input value={temperature} onChange={this.handleChange}></input>
        <BoilingPointVerdict celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}

export default Calculator;

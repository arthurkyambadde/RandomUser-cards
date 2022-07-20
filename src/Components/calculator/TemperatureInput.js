import React from "react";

const scaleNames = {
  c: "celsius",
  f: "fahrenheit",
};
class TemperatureInput extends React.Component {
  handleChange = (e) => {
    this.props.onTemperatureChange(e.target.value);
  };

  render() {
    const temperature = this.props.temperature;

    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter Temperature in: {scaleNames[scale]} </legend>
        <input value={temperature} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

export default TemperatureInput;

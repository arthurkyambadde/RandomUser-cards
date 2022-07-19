import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingPointVerdict from "./BoilingPointVerdict";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;

    return (
      <div>
        <TemperatureInput scale="c" temperature={celsius} />
        <TemperatureInput scale="f" temperature={fahrenheit} />
        <BoilingPointVerdict />
      </div>
    );
  }
}

export default Calculator;

import React from "react";
import TemperatureInput from "./TemperatureInput";
import BoilingPointVerdict from "./BoilingPointVerdict";
import {
  tryConvert,
  toCelsius,
  toFahrenheit,
} from "../../Utilities/ConvertFunctions";
class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
      scale: "c",
    };
  }

  handleCelsiusChange = (temperature) => {
    this.setState({ scale: "c", temperature });
  };

  handleFahrenheitChange = (temperature) => {
    this.setState({ scale: "f", temperature });
  };

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}
        />
        <BoilingPointVerdict />
      </div>
    );
  }
}

export default Calculator;

import React from "react";

class BoilingPointVerdict extends React.Component {
  render() {
    if (this.props.celcius >= 100) {
      return <div>The water will boil</div>;
    }
    return <div>The water will not boil</div>;
  }
}

export default BoilingPointVerdict;

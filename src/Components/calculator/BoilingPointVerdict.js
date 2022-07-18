import React from "react";

class BoilingPointVerdict extends React.Component {
  render() {
    if (this.props.celsius >= 100) {
      return <div>The water will boil</div>;
    } else {
      return <div>The water will not boil</div>;
    }
  }
}

export default BoilingPointVerdict;

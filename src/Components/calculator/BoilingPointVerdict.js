import React from "react";

class BoilingPointVerdict extends React.Component {
  remder() {
    if (temperature >= 100) {
      return <div>The water will boil</div>;
    } else {
      return <div>The water will not boil</div>;
    }
  }
}

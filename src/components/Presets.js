import React from "react";
import Button from "react-bootstrap/Button";

class Presets extends React.Component {
  render() {
    return (
      <div className="center">
        <Button variant="outline-light" size="sm" onClick={this.props.glider}>
          Glider
        </Button>
        <Button
          variant="outline-light"
          size="sm"
          onClick={this.props.pentaDecathlon}
        >
          Penta-Decathlon
        </Button>
        <Button variant="outline-light" size="sm" onClick={this.props.pulsar}>
          Pulsar
        </Button>
        <Button
          variant="outline-light"
          size="sm"
          onClick={this.props.gosperGun}
        >
          Gosper Glider Gun
        </Button>
      </div>
    );
  }
}

export default Presets;

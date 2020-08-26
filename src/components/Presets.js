import React from "react";

class Presets extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.glider}>Glider</button>
        <button onClick={this.props.pentaDecathlon}>Penta-Decathlon</button>
        <button onClick={this.props.pulsar}>Pulsar</button>
        <button onClick={this.props.gosperGun}>Gosper Glider Gun</button>
      </div>
    );
  }
}

export default Presets;

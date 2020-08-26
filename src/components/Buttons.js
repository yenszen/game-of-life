import React from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import DropdownItem from "react-bootstrap/DropdownItem";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

class Buttons extends React.Component {
  handleSelect = e => {
    this.props.gridSize(e);
  };

  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <Button variant="primary" size="sm" onClick={this.props.playButton}>
            Play
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.pauseButton}>
            Pause
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.clear}>
            Clear
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.slow}>
            Slow
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.fast}>
            Fast
          </Button>
          <Button variant="primary" size="sm" onClick={this.props.seed}>
            Random
          </Button>
          <DropdownButton
            title="Grid Size"
            id="size-menu"
            onSelect={this.handleSelect}
          >
            <DropdownItem>50x35</DropdownItem>
            <DropdownItem eventKey="1">75x50</DropdownItem>
          </DropdownButton>
        </ButtonToolbar>
      </div>
    );
  }
}

export default Buttons;

import React from "react";
import "./Game.css";

const cell_size = 20;
const width = 800;
const height = 600;

class Game extends React.Component {
  constructor() {
    super();
    this.rows = height / cell_size;
    this.cols = width / cell_size;
    this.board = this.makeEmptyBoard();
  }

  state = { cells: [], interval: 100, isRunning: false };

  runGame = () => {
    this.setState({ isRunning: true });
    this.runIteration();
  };

  stopGame = () => {
    this.setState({ isRunning: false });

    if (this.timeoutHandler) {
      window.clearTimeout(this.timeoutHandler);
      this.timeoutHandler = null;
    }
  };

  runIteration() {
    console.log("running iteration");

    let newBoard = this.makeEmptyBoard();
    // TODO: add logic for each iteration here
    this.board = newBoard;
    this.setState({ cells: this.makeCells });
    this.timeoutHandler = window.setTimeout(() => {
      this.runIteration();
    }, this.state.interval);
  }

  handleIntervalChange = event => {
    this.setState({ interval: event.target.value });
  };

  makeEmptyBoard() {
    let board = [];

    for (let y = 0; y < this.rows; y++) {
      board[y] = [];
      for (let x = 0; x < this.cols; x++) {
        board[y][x] = false;
      }
    }

    return board;
  }

  makeCells() {
    let cells = [];

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        if (this.board[y][x]) {
          cells.push({ x, y });
        }
      }
    }

    return cells;
  }

  getElementOffset() {
    const rect = this.boardRef.getBoundingClientRect();
    const doc = document.documentElement;

    return {
      x: rect.left + window.pageXOffset - doc.clientLeft,
      y: rect.top + window.pageYOffset - doc.clientTop
    };
  }

  handleClick = event => {
    const elemOffset = this.getElementOffset();
    const offsetX = event.clientX - elemOffset.x;
    const offsetY = event.clientY - elemOffset.y;
    const x = Math.floor(offsetX / cell_size);
    const y = Math.floor(offsetY / cell_size);

    if (x >= 0 && x <= this.cols && y >= 0 && y <= this.rows) {
      this.board[y][x] = !this.board[y][x];
    }

    this.setState({ cells: this.makeCells() });
  };

  render() {
    const { cells } = this.state;
    console.log(cells);

    return (
      <div>
        <div
          className="Board"
          style={{
            width,
            height,
            backgroundSize: `${cell_size}px ${cell_size}px`
          }}
          onClick={this.handleClick}
          ref={n => {
            this.boardRef = n;
          }}
        >
          {cells.map(cell => (
            <Cell x={cell.x} y={cell.y} key={`${cell.x}, ${cell.y}`} />
          ))}
        </div>
        <div className="controls">
          Update every{" "}
          <input
            value={this.state.interval}
            onChange={this.handleIntervalChange}
          />{" "}
          msec
          {this.state.isRunning ? (
            <button className="button" onClick={this.stopGame}>
              Stop
            </button>
          ) : (
            <button className="button" onClick={this.runGame}>
              Run
            </button>
          )}
        </div>
      </div>
    );
  }
}

class Cell extends React.Component {
  render() {
    const { x, y } = this.props;

    return (
      <div
        className="Cell"
        style={{
          left: `${cell_size * x + 1}px`,
          top: `${cell_size * y + 1}px`,
          width: `${cell_size - 1}px`,
          height: `${cell_size - 1}px`
        }}
      />
    );
  }
}

export default Game;

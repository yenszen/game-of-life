import React from "react";
import Grid from "./Grid";
import Buttons from "./Buttons";
import Presets from "./Presets";

class Main extends React.Component {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 35;
    this.cols = 50;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    };
  }

  selectBox = (row, col) => {
    let gridCopy = arrayClone(this.state.gridFull);
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };

  // seed = random
  seed = () => {
    let gridCopy = arrayClone(this.state.gridFull);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        if (Math.floor(Math.random() * 4) === 1) {
          gridCopy[i][j] = true;
        }
      }
    }
    clearInterval(this.intervalId);
    this.setState({
      gridFull: gridCopy,
      generation: 0
    });
  };

  playButton = () => {
    clearInterval(this.intervalId);
    this.intervalId = setInterval(this.play, this.speed);
  };

  pauseButton = () => {
    clearInterval(this.intervalId);
  };

  slow = () => {
    this.speed = 1000;
    this.playButton();
  };

  fast = () => {
    this.speed = 100;
    this.playButton();
  };

  clear = () => {
    let grid = Array(this.rows)
      .fill()
      .map(() => Array(this.cols).fill(false));

    this.setState({
      gridFull: grid,
      generation: 0
    });
  };

  gridSize = size => {
    switch (size) {
      case "1":
        this.cols = 75;
        this.rows = 50;
        break;
      default:
        this.cols = 50;
        this.rows = 35;
    }
    this.clear();
  };

  play = () => {
    let g = this.state.gridFull;
    let g2 = arrayClone(this.state.gridFull);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0; // how many neighbors each cell has

        // below 8 LOC checks for neighbors, which updates count accordingly
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && this.cols - 1) if (g[i + 1][j + 1]) count++;

        // below 2 LOC updates status of cell: alive or dead
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false; // if <2 or >3 neighbors, the cell dies
        if (!g[i][j] && count === 3) g2[i][j] = true; // if dead cell has 3 neighbors, the cell lives
      }
    }

    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };

  // PRESETS
  glider = () => {
    this.clear();
    let gridCopy = arrayClone(this.state.gridFull);

    gridCopy[1][3] = true;
    gridCopy[2][1] = true;
    gridCopy[2][3] = true;
    gridCopy[3][2] = true;
    gridCopy[3][3] = true;

    this.setState({
      gridFull: gridCopy
    });
  };

  pentaDecathlon = () => {
    this.clear();
    let gridCopy = arrayClone(this.state.gridFull);

    gridCopy[14][20] = true;
    gridCopy[14][21] = true;
    gridCopy[14][23] = true;
    gridCopy[14][24] = true;
    gridCopy[14][25] = true;
    gridCopy[14][26] = true;
    gridCopy[14][28] = true;
    gridCopy[14][29] = true;
    gridCopy[13][22] = true;
    gridCopy[15][22] = true;
    gridCopy[13][27] = true;
    gridCopy[15][27] = true;

    this.setState({
      gridFull: gridCopy
    });
  };

  pulsar = () => {
    let gridCopy = arrayClone(this.state.gridFull);

    // gridCopy[6][18]
    gridCopy[6][20] = true;
    gridCopy[6][21] = true;
    gridCopy[6][22] = true;
    gridCopy[6][26] = true;
    gridCopy[6][27] = true;
    gridCopy[6][28] = true;

    gridCopy[8][18] = true;
    gridCopy[8][23] = true;
    gridCopy[8][25] = true;
    gridCopy[8][30] = true;

    gridCopy[9][18] = true;
    gridCopy[9][23] = true;
    gridCopy[9][25] = true;
    gridCopy[9][30] = true;

    gridCopy[10][18] = true;
    gridCopy[10][23] = true;
    gridCopy[10][25] = true;
    gridCopy[10][30] = true;

    gridCopy[11][20] = true;
    gridCopy[11][21] = true;
    gridCopy[11][22] = true;
    gridCopy[11][26] = true;
    gridCopy[11][27] = true;
    gridCopy[11][28] = true;

    gridCopy[13][20] = true;
    gridCopy[13][21] = true;
    gridCopy[13][22] = true;
    gridCopy[13][26] = true;
    gridCopy[13][27] = true;
    gridCopy[13][28] = true;

    gridCopy[14][18] = true;
    gridCopy[14][23] = true;
    gridCopy[14][25] = true;
    gridCopy[14][30] = true;

    gridCopy[15][18] = true;
    gridCopy[15][23] = true;
    gridCopy[15][25] = true;
    gridCopy[15][30] = true;

    gridCopy[16][18] = true;
    gridCopy[16][23] = true;
    gridCopy[16][25] = true;
    gridCopy[16][30] = true;

    gridCopy[18][20] = true;
    gridCopy[18][21] = true;
    gridCopy[18][22] = true;
    gridCopy[18][26] = true;
    gridCopy[18][27] = true;
    gridCopy[18][28] = true;

    this.setState({
      gridFull: gridCopy
    });
  };

  gosperGun = () => {
    let gridCopy = arrayClone(this.state.gridFull);

    gridCopy[6][1] = true;
    gridCopy[6][2] = true;
    gridCopy[7][1] = true;
    gridCopy[7][2] = true;

    gridCopy[6][11] = true;
    gridCopy[7][11] = true;
    gridCopy[8][11] = true;
    gridCopy[5][12] = true;
    gridCopy[9][12] = true;
    gridCopy[4][13] = true;
    gridCopy[4][14] = true;
    gridCopy[10][13] = true;
    gridCopy[10][14] = true;
    gridCopy[7][15] = true;
    gridCopy[5][16] = true;
    gridCopy[9][16] = true;
    gridCopy[6][17] = true;
    gridCopy[8][17] = true;
    gridCopy[7][17] = true;
    gridCopy[7][18] = true;

    gridCopy[4][21] = true;
    gridCopy[5][21] = true;
    gridCopy[6][21] = true;
    gridCopy[4][22] = true;
    gridCopy[5][22] = true;
    gridCopy[6][22] = true;
    gridCopy[3][23] = true;
    gridCopy[7][23] = true;
    gridCopy[2][25] = true;
    gridCopy[3][25] = true;
    gridCopy[7][25] = true;
    gridCopy[8][25] = true;

    gridCopy[4][35] = true;
    gridCopy[4][36] = true;
    gridCopy[5][35] = true;
    gridCopy[5][36] = true;

    this.setState({
      gridFull: gridCopy
    });
  };

  render() {
    return (
      <div>
        <h1>The Game of Life</h1>
        <Buttons
          playButton={this.playButton}
          pauseButton={this.pauseButton}
          slow={this.slow}
          fast={this.fast}
          clear={this.clear}
          seed={this.seed}
          gridSize={this.gridSize}
        />
        <Presets
          glider={this.glider}
          pentaDecathlon={this.pentaDecathlon}
          pulsar={this.pulsar}
          gosperGun={this.gosperGun}
        />
        <Grid
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
          selectBox={this.selectBox}
        />
        <h2>Generations: {this.state.generation}</h2>
      </div>
    );
  }
}

function arrayClone(arr) {
  return JSON.parse(JSON.stringify(arr));
}

export default Main;

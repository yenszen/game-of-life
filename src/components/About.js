import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <div className="rules">
          <h3>Rules</h3>
          <ul>
            <li>Any live cell with 2 or 3 neighbours survives</li>
            <li>Any dead cell with 3 live neighbours becomes a live cell</li>
            <li>
              All other live cells die in the next generation. Similarly, all
              other dead cells stay dead
            </li>
          </ul>
        </div>

        <div className="information">
          <h3>About</h3>
          <p>
            Conway's Game of Life is a zero-player game and a famous example of
            a cellular automaton - a collection of "colored" cells commonly on a
            two-dimensional grid that evolves through a number of discrete time
            steps according to a set of rules based on the states of neighboring
            cells.
          </p>
          <p>
            John Conway initially developed the algorithm in search of an
            interesting and unpredictable cell automaton. Upon many experiments
            later, he decided on the final criteria for which his chosen rules
            for the game should adhere to:
          </p>
          <ul>
            <li>There should be no explosive growth</li>
            <li>
              There should exist small initial patterns with chaotic,
              unpredictable outcomes
            </li>
            <li>
              There should be potential for von Neumann universal constructors
            </li>
            <li>
              The rules should be as simple as possible, whilst adhering to the
              above constraints
            </li>
          </ul>
          <p>
            The algorithm is Turing complete, meaning that it is capable of
            performing arbitrary, general purpose computations.
          </p>
        </div>
      </div>
    );
  }
}

export default About;

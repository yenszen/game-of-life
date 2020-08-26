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
        </div>
      </div>
    );
  }
}

export default About;

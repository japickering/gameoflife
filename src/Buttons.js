import React from 'react';
import { ButtonToolbar } from 'react-bootstrap';

class Buttons extends React.Component {
  handleSelect = evt => {
    this.props.gridSize(evt);
  };
  render() {
    return (
      <div className="center">
        <ButtonToolbar>
          <button onClick={this.props.playButton}>
            Play
          </button>
          <button onClick={this.props.pauseButton}>
            Pause
          </button>
          <button onClick={this.props.clear}>
            Clear
          </button>
          <button onClick={this.props.slow}>
            Slow
          </button>
          <button onClick={this.props.fast}>
            Fast
          </button>
          <button onClick={this.props.seed}>
            Seed
          </button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default Buttons;
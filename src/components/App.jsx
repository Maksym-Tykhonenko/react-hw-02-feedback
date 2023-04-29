import { Component } from "react";

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleLiaveGoodFeedback = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    })
  };
  handleLiaveNeutralFeedback = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  };
  handleLiaveBadFeedback = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      }
    })
  };

  render() {
    return (
      <div>
        <div>
          <p>Please leave feedback</p>
          <button type="button" onClick={this.handleLiaveGoodFeedback}>Good</button>
          <button type="button" onClick={this.handleLiaveNeutralFeedback}>Neutral</button>
          <button type="button" onClick={this.handleLiaveBadFeedback}>Bad</button>
        </div>
        <div>
          <p>Statistics</p>
          <p>Good: {this.state.good }</p>
          <p>Neutral: {this.state.neutral }</p>
          <p>Bad: {this.state.bad }</p>
        </div>

      </div>
    );
  };
};


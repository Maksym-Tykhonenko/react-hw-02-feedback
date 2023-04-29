import { Component } from "react";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };
  
  handleBtnClick (option) {
    //console.log('click on ', { option })
    this.setState((prevSt) => {
      return {
        [option]: prevSt[option] + 1,
        
      }
    })
  };

  countTotalFeedback() {
    const {good, neutral, bad} = this.state;
    return  good + neutral + bad;
  };

  countPositiveFeedbackPercentage() {
    // % позитивних оцінок = (кількість "good" оцінок / загальна кількість оцінок) * 100%
    const { good } = this.state;
    return (good / this.countTotalFeedback()) * 100
    
  }

  render() {
    const options = Object.keys(this.state)
    const total = this.countTotalFeedback()
    const positivePers = this.countPositiveFeedbackPercentage();
    console.log(positivePers)
    return (
      <>
        <p>Please leave feedback</p>
        <div>
          {options.map((option, index) => {
            return (
              <button 
                type="button" 
                key={index}
                onClick={()=>{this.handleBtnClick(option)} }>{option}</button>
            )
          })}
        </div>

        <p>Statistics</p>
        <div>
          <p>Good: {this.state.good }</p>
          <p>Neutral: {this.state.neutral }</p>
          <p>Bad: {this.state.bad}</p>
          {total > 0 && <div><p>Total: {total }</p><p>positivePers: {positivePers }%</p></div>}
          
        </div>
      </>
    )
   }

};


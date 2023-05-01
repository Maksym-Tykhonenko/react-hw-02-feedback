import { Component } from "react";
import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import {Notification} from "./Notification/Notification";

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  };
  
  handleBtnClick = (option) => {
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
    return ((good / this.countTotalFeedback()) * 100).toFixed(2)
    
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePers = this.countPositiveFeedbackPercentage();
    
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleBtnClick}
          />
        </Section>
        
        {total < 1 ? <Notification title="There is no feedback" /> :
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePers} />
          </Section>}
      </>
    );
   }

};


import { Paragraf } from './Statistics.styled';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        <div>
          <Paragraf>Good: {good }</Paragraf>
          <Paragraf>Neutral: {neutral }</Paragraf>
          <Paragraf>Bad: {bad}</Paragraf>
          {total > 0 &&
            <div>
              <Paragraf>Total: {total}</Paragraf>
              <Paragraf>positivePers: {positivePercentage}%</Paragraf>
            </div>}
          
        </div>
    )
}
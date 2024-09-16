import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Counter = (props) => (
  <p>
    {props.text} {props.count}
  </p>
);

const Statistics = (props) => {
  const feedbackData = props.data;

  const totalFeedback = Object.values(feedbackData).reduce(
    (accumulator, current) => accumulator + current.count,
    0
  );
  const weightedSum = Object.values(feedbackData).reduce(
    (accumulator, current) => accumulator + current.count * current.weight,
    0
  );
  const averageScore = totalFeedback === 0 ? 0 : weightedSum / totalFeedback;
  const positiveCount = Object.values(feedbackData).reduce(
    (accumulator, current) =>
      current.weight >= 0 ? accumulator + current.count : accumulator,
    0
  );
  const positivePercentage = (positiveCount * 100) / totalFeedback;

  return (
    <div>
      <p>All feedback: {totalFeedback}</p>
      <p>Average score: {averageScore}</p>
      <p>
        Positive (and neutral) percentage:{" "}
        {positivePercentage ? positivePercentage : 0}%
      </p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackData = {
    good: { count: good, weight: 1 },
    neutral: { count: neutral, weight: 0 },
    bad: { count: bad, weight: -1 },
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>Log</h1>
      <Counter text="good" count={good} />
      <Counter text="neutral" count={neutral} />
      <Counter text="bad" count={bad} />
      <h1>Statistics</h1>
      <Statistics data={feedbackData} />
    </div>
  );
};

export default App;

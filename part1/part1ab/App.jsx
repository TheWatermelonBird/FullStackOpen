const Header = (props) => {
  return <p>{props.course.name}</p>;
};

const Content = (props) => {
  return (
    <>
      <Part
        part={props.content[0].name}
        exercise={props.content[0].exercises}
      />
      <Part
        part={props.content[1].name}
        exercise={props.content[1].exercises}
      />
      <Part
        part={props.content[2].name}
        exercise={props.content[2].exercises}
      />
    </>
  );
};

const Total = (props) => {
  return (
    // prettier-ignore
    <p>
      Number of exercises {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content content={course.parts} />
      <Total
        exercises={[
          course.parts[0].exercises,
          course.parts[1].exercises,
          course.parts[2].exercises,
        ]}
      />
    </div>
  );
};

export default App;

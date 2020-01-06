import React, { Component, Fragment } from 'react';
import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import { muscles, exercises } from './store';

class App extends Component {
  state = {
    exercises
  }

  getExercisesByGroup() {
    return Object.entries(this.state.exercises.reduce((exercises, exercise) => {
      const { muscles } = exercise;

      exercises[muscles] = exercises[muscles] 
        ? [...exercises[muscles], exercise]
        : [exercise]

        return exercises;
    }, {}));
  }

  render() {
    const exercises = this.getExercisesByGroup();

    return (
      <Fragment>
          <Header/>

          <Exercises
            exercises={exercises}
          />

          <Footer 
            muscles={muscles}
          />
      </Fragment>
    )
  }
}

export default App;
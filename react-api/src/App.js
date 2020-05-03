import React, { Component } from 'react';
import './App.css';
import Questions from './quiz/question';
import ShowAnswers from './quiz/showAnswers';

class App extends Component {

  render() {  
    return (
      <div>
      <ShowAnswers/>
      
      <Questions theQuestions = {this.state.questions} />
      
      </div>
    )
  }

  state = {
    questions : []
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
    .then(res => res.json())
    .then((data) => {
      this.setState({ questions: data.results })
    })
    .catch(console.log)
  }
}

export default App;

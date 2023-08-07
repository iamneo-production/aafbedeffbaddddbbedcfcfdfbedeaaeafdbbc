import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Card from "./components/UI/Card/Card"
import Button  from './components/UI/Button/Button';

function App() {
  const [showQuestion ,setShowQuestions] = useState(false);
  const [questionsCorrect, setquestionsCorrect] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResults, setShowResults] = useState(false);
  function handleStartQuiz(){
    setShowQuestions(true);
    setShowQuiz(false);
  }
  const questions = [
    {
      quesId: 1,
      ques: 'What color is the sky?',
      Options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green',
      },
      answer: 'Blue',
    },
    {
      quesId: 2,
      ques: 'What color is are the leaves ?',
      Options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green',
      },
      answer: 'Green',
    },
    {
      quesId: 3,
      ques: 'What color is the sun?',
      Options: {
        option1: 'Blue',
        option2: 'Red',
        option3: 'Yellow',
        option4: 'Green',
      },
      answer: 'Yellow',
    },
  ]
  const handleCorrectAnswerMarkUpdate = (isCorrect) => {
    console.log(isCorrect);
    if(isCorrect){
      setquestionsCorrect(questionsCorrect + 1);
    }
  }
  const handleShowResults = () => {
    console.log("Show Results", questionsCorrect);
    setShowQuiz(true);
    setShowResults(false);
  }
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {
        !showQuestion ? 
        (
          <button className='Startbtn' onClick={handleStartQuiz}>Start Quiz</button>
        )
        :
        showQuiz===false?
        (
          <>
          <div className="container">
            {questions.map((item) => (
              <Card 
                key={item.quesId}
                question={item.ques}
                correctAnswerMarkUpdate={handleCorrectAnswerMarkUpdate}
                setShowResults = {setShowResults}
                options={item.Options}
                answer={item.answer}
              />
            ))}
          </div>
            {showResults && <Button onClick={handleShowResults} className='ResultBtn'>Show Results</Button>}
          </>
        )
        :
        (
          <div className='ResultDiv'>
            <h1 className='ResultText'>You have answered {questionsCorrect} / {questions.length} Correctly</h1>
            <Button className='Startbtn' onClick={handleStartQuiz}>Start Quiz</Button>
          </div>  
        )
      }
    </div>
  );
}

export default App;

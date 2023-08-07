import logo from './logo.svg';
import './App.css';
import React , {useState} from 'react';
import Card from "./components/UI/Card/Card"
import Button  from './components/UI/Button/Button';

function App() {
  const [questionsAttempt ,setQuestionsAttempt] = useState(0)
  const [questionsCorrect, setquestionsCorrect] = useState(0)
  const [showResults, setShowResults] = useState(false)
  const [card, setCard] = useState(false)
  const [start, setStart] = useState(true)
  const[res,setResult] = useState(false)
  function handleStartQuiz(){
    setStart(false)
    setCard(true)
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
    setStart(true);
    setCard(false);
    setShowResults(false);
  }
  return (
    <div className="App">
      <h1>Quizz App</h1>
      {card && <div className='container'> {questions.map((q) => (
        <Card 
        key={q.quesId}
        question={q.ques} 
        correctAnswerMarkUpdate={handleCorrectAnswerMarkUpdate}
        options={q.Options}
        answer={q.answer}
        setCard={setShowResults}
        setQsns={setQuestionsAttempt}
        qsnAttempt={questionsAttempt}
        />
      ))}
      </div>}
      {showResults && <Button onClick={handleShowResults} className="ResultBtn">Show Results</Button>}
      {res && <div className='ResultDiv'>
            <h1 className='ResultText'>You have answered {questionsCorrect} / {questions.length} Correctly</h1>
          </div>
      }
      {start && <Button onClick={handleStartQuiz} className="Startbtn">Start Quiz</Button>}
    </div>
  )
}

export default App

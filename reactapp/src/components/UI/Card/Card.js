import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({question, correctAnswerMarkUpdate, setCard, options, answer}) => {
  const [isDisabled, setDisabled] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  

  function handleQuestionAnswered() {
      setQuestionsAnswered(questionsAnswered + 1);
  }

  const optionClickHandler = (value) => {
    handleQuestionAnswered();
    setDisabled(true);
    console.log(questionsAnswered);
    if(questionsAnswered === 3) {
        setCard(true);
        console.log(questionsAnswered);
    }
    if (value === answer) {
      correctAnswerMarkUpdate(true);
    }
    else{
      correctAnswerMarkUpdate(false);
    }
  };

  return (
    <div className="container-2">
      <h4 className="quesClass">{question}</h4>
      <div >
        {Object.keys(options).map((key) => (
          <Button
            key={key}
            disabled={isDisabled}
            onClick={() => optionClickHandler(options[key])}
            className="OptionBtn"
          >
            {options[key]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Card;
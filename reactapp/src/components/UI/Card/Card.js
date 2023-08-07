import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({question, correctAnswerMarkUpdate, setShowResults, options, answer}) => {
  const [isDisabled, setDisabled] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  

  function handleQuestionAnswered() {
      setQuestionsAnswered(questionsAnswered + 1);
  }

  const optionClickHandler = (value) => {
    handleQuestionAnswered();
    setDisabled(true);
    if(questionsAnswered === 5) {
        setShowResults(true);
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
      <h4 className="quesClass">{props.question}</h4>
      <div >
        {Object.keys(options).map((key) => (
          <Button
            key={key}
            disabled={isDisabled}
            onClick={() => optionClickHandler(options[key])}
            className="OptionBtn"
          >
            {props.options[key]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Card;
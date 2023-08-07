import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = (props) => {
  const [isDisabled, setDisabled] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(0);
  

  function handleQuestionAnswered() {
      setQuestionsAnswered(questionsAnswered + 1);
  }

  const optionClickHandler = (answer) => {
    handleQuestionAnswered();
    setDisabled(true);
    if(questionsAnswered === 5) {
        props.setShowResults(true);
    }
    if (answer === props.answer) {
      props.correctAnswerMarkUpdate(true);
    }
    else{
      props.correctAnswerMarkUpdate(false);
    }
  };

  return (
    <div className="container-2">
      <h4 className="quesClass">{props.question}</h4>
      <div >
        {Object.keys(props.options).map((key) => (
          <Button
            key={key}
            disabled={isDisabled}
            onClick={() => optionClickHandler(props.options[key])}
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
import React, { useState } from "react";
import "./Card.css";
import Button from "../Button/Button";

const Card = ({question, correctAnswerMarkUpdate, setCard, options, answer, setQsns, qsnAttempt}) => {
  const [isDisabled, setDisabled] = useState(false);

  const optionClickHandler = (value) => {
    setQsns(qsnAttempt+1);
    setDisabled(true);
    console.log(qsnAttempt);
    if(qsnAttempt === 2) {
        setCard(true);
        console.log(qsnAttempt);
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
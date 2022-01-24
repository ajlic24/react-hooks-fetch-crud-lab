import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, setQuestionsFunc}) {
  
  function handleDeleteQuestion(item) {
    const updatedQuestions = questions.filter(question => question.id !== item.id)
    setQuestionsFunc(updatedQuestions)
  }

  function handleSelectChange(newObj) {
    const updatedQuestions = questions.map(question => {
      if (question.id === newObj.id) {
        return newObj
      } else {
        return question
      }
    })
    setQuestionsFunc(updatedQuestions)
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => {
       return < QuestionItem key={question.id} question={question} onDelete={handleDeleteQuestion} onChange={handleSelectChange} />
        })}</ul>
    </section>
  );
}

export default QuestionList;

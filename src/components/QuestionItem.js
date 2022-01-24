import React from "react";

function QuestionItem({ question, onDelete, onChange }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleClick() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
    })
      .then(r => r.json())
      .then(() => onDelete(question))
    
  }

  function handleChange(e) {
    const newAnswer = e.target.options.selectedIndex
    const newObj = {...question, correctIndex: newAnswer}

    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(newObj)
    })
      .then(r => r.json()) 
      .then(data => onChange(data))
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleChange} >{options}</select>
      </label>
      <button onClick={handleClick} >Delete Question</button>
    </li>
  );
}

export default QuestionItem;

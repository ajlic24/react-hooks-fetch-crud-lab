import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/questions`)
      .then(r => r.json())
      .then(data => setQuestions(data))
  }, [])

  function handleAddQuestion(value) {
    const newQuestions = [...questions, value]
    setQuestions(newQuestions)
  }

  function setQuestionsFunc(value) {
    setQuestions(value)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={handleAddQuestion} /> : <QuestionList questions={questions} setQuestionsFunc={setQuestionsFunc} />}
    </main>
  );
}

export default App;

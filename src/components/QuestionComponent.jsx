import React, { useEffect, useState } from 'react'

const QuestionComponent = ({ setPlayerPoints, playerTurn, finishTurn, setFinishTurn, winner, setWinner }) => {
  const [questions, setQuestions] = useState([])
  const [numberOfQuestionToShow, setNumberOfQuestionToShow] = useState(0)

  useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
      .then(response => response.json())
      .then(data => {
        // eslint-disable-next-line camelcase
        const newQuestions = data.results.map(({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers }))
        setQuestions(newQuestions)
        console.log(questions)
      })
  }, [winner])
  useEffect(() => {
    console.log(questions)
    console.log(numberOfQuestionToShow)
    if (finishTurn && questions.length !== 0) {
      setNumberOfQuestionToShow(numberOfQuestionToShow + 1)
      console.log('numberOfQuestionToShow: ', numberOfQuestionToShow)
    }
  }, [finishTurn])

  return (
    <div>
      <h1>{JSON.stringify(questions[numberOfQuestionToShow])}</h1>
      hello
    </div>
  )
}

export default QuestionComponent

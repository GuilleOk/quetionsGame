/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react'
import ActualQuestion from './ActualQuestion'

const QuestionComponent = ({ resetAll, setTotalAnswers, totalAnswers, setPlayerPoints, playerTurn, setPlayerTurn, winner, setWinner, playerPoints }) => {
  const [questions, setQuestions] = useState([])
  const [numberOfQuestionToShow, setNumberOfQuestionToShow] = useState(0)
  const [question, setQuestion] = useState('')
  const [correct_Answer, setCorrect_Ansewers] = useState('')
  const [incorrect_Answers, setIncorrect_Answers] = useState([])

  useEffect(() => {
    setQuestions([])
    setNumberOfQuestionToShow(0)
    setQuestion('')
    setCorrect_Ansewers('')
    setIncorrect_Answers([])

    if (winner === '') {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
        .then(response => response.json())
        .then(data => {
        // eslint-disable-next-line camelcase
          const newQuestions = data.results.map(({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers }))
          setQuestions(newQuestions)
          setQuestion(newQuestions[numberOfQuestionToShow].question)
          setCorrect_Ansewers(newQuestions[numberOfQuestionToShow].correct_answer)
          setIncorrect_Answers(newQuestions[numberOfQuestionToShow].incorrect_answers)
        })
    }
    console.log('winner: ', winner)
  }, [winner, resetAll])

  useEffect(() => {
    console.log('questions', questions)
    if (questions.length !== 0) {
      if (numberOfQuestionToShow < 10) {
        setNumberOfQuestionToShow(numberOfQuestionToShow + 1)
        setQuestion(questions[numberOfQuestionToShow].question)
        setCorrect_Ansewers(questions[numberOfQuestionToShow].correct_answer)
        setIncorrect_Answers(questions[numberOfQuestionToShow].incorrect_answers)
        console.log('numberOfQuestionToShow: ', numberOfQuestionToShow)
        console.log('question: ', question)
      }
    }
  }, [playerTurn, questions])

  useEffect(() => {
    if (totalAnswers === 10) {
      const { pointsPlayer1, pointsPlayer2 } = playerPoints
      if (pointsPlayer1 < pointsPlayer2) {
        setWinner('Player 2')
      } else if (pointsPlayer1 > pointsPlayer2) {
        setWinner('Player 2')
      } else {
        setWinner('Draw')
      }
      console.log('Winner: ', winner)
    }
  }, [totalAnswers])

  return (
    <div className='my-5'>
      <ActualQuestion setTotalAnswers={setTotalAnswers} totalAnswers={totalAnswers} questions={questions} question={question} numberOfQuestionToShow={numberOfQuestionToShow} correct_Answer={correct_Answer} incorrect_Answers={incorrect_Answers} playerPoints={playerPoints} setPlayerPoints={setPlayerPoints} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} winner={winner} setWinner={setWinner} />
    </div>
  )
}

export default QuestionComponent

/* eslint-disable camelcase */
import React, { useEffect } from 'react'
import ActualQuestion from './ActualQuestion'
import { useFetchQuestions } from '../hooks/useFetchQuestions'
import { useTheLastAnswerValidate } from '../hooks/useTheLastAnswerValidate'
import { useWinner } from '../hooks/useWinner'

const QuestionComponent = ({ resetAll, setTotalAnswers, totalAnswers, setPlayerPoints, playerTurn, setPlayerTurn, winner, setWinner, playerPoints }) => {
  const { makeFetch, questions, numberOfQuestionToShow, setNumberOfQuestionToShow, question, setQuestion, correct_Answer, setCorrect_Ansewers, incorrect_Answers, setIncorrect_Answers } = useFetchQuestions({ winner })
  const { validateLastQuestion } = useTheLastAnswerValidate({ questions, numberOfQuestionToShow, setNumberOfQuestionToShow, setQuestion, setCorrect_Ansewers, setIncorrect_Answers })
  const { validateWinner } = useWinner({ totalAnswers, playerPoints, setWinner })

  useEffect(() => {
    makeFetch()
  }, [winner, resetAll])

  useEffect(() => {
    validateLastQuestion()
  }, [playerTurn, questions])

  useEffect(() => {
    validateWinner()
  }, [totalAnswers])

  return (
    <div className='mt-3'>
      <ActualQuestion setTotalAnswers={setTotalAnswers} totalAnswers={totalAnswers} questions={questions} question={question} numberOfQuestionToShow={numberOfQuestionToShow} correct_Answer={correct_Answer} incorrect_Answers={incorrect_Answers} playerPoints={playerPoints} setPlayerPoints={setPlayerPoints} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} winner={winner} setWinner={setWinner} />
    </div>
  )
}

export default QuestionComponent

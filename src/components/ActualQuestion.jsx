/* eslint-disable camelcase */
import React from 'react'

const ActualQuestion = ({ questions, question, setTotalAnswers, totalAnswers, numberOfQuestionToShow, correct_Answer, incorrect_Answers, playerPoints, setPlayerPoints, playerTurn, setPlayerTurn, winner, setWinner }) => {
  if (questions.length === 0 || numberOfQuestionToShow === 11) {
    return ''
  } else {
    const handleAlert = () => {
      const alertContainer = document.querySelector('.alertIncorrectAnswer')
      alertContainer.className = 'd-none alertIncorrectAnswer'
    }
    const handlerAnswer = (answer) => {
      const points = playerPoints
      setTotalAnswers(totalAnswers + 1)
      setPlayerTurn(!playerTurn)
      if (answer === correct_Answer) {
        if (playerTurn) {
          setPlayerPoints({ pointsPlayer1: points.pointsPlayer1 + 1, pointsPlayer2: points.pointsPlayer2 })
        } else {
          setPlayerPoints({ pointsPlayer1: points.pointsPlayer1, pointsPlayer2: points.pointsPlayer2 + 1 })
        }
      } else {
        // eslint-disable-next-line no-undef
        // alert('Respuesta Incorrecta')
        const alertContainer = document.querySelector('.alertIncorrectAnswer')
        alertContainer.className = 'alertIncorrectAnswer'
      }
    }
    return (
      <div className='actualQuestion'>
        <h1 className='questionToShow' style={{ color: 'blue' }}>{question}</h1>
        <div className='d-none alertIncorrectAnswer'>
          <h2 className='h2IncorrectAnswer'>Incorrect Answer</h2>
          <button className='btn buttonHandlerAlert' onClick={handleAlert}>Close</button>
        </div>
        <div className='row mt-4 mb-2'>
          <div className='col-lg-3'>
            <div className='d-flex justify-content-center'>
              <button className='btn answerContainer' onClick={() => handlerAnswer(correct_Answer)}>{correct_Answer}</button>
            </div>
          </div>
          {/* eslint-disable-next-line camelcase */}
          {incorrect_Answers.map(answerItem => {
            return (
              <div className='col-lg-3' key={answerItem}>
                <div className='d-flex justify-content-center'>
                  <button className='btn answerContainer' onClick={() => handlerAnswer(answerItem)}>{answerItem}</button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default ActualQuestion

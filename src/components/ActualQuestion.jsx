/* eslint-disable camelcase */
import React from 'react'

const ActualQuestion = ({ questions, question, numberOfQuestionToShow, correct_Answer, incorrect_Answers, playerPoints, setPlayerPoints, playerTurn, setPlayerTurn, setWinner }) => {
  if (questions.length === 0 || numberOfQuestionToShow === 11) {
    return ''
  } else {
    const handlerAnswer = (answer) => {
      const points = playerPoints
      setPlayerTurn(!playerTurn)
      if (answer === correct_Answer) {
        if (playerTurn) {
          setPlayerPoints({ pointsPlayer1: points.pointsPlayer1 + 1, pointsPlayer2: points.pointsPlayer2 })
        } else {
          setPlayerPoints({ pointsPlayer1: points.pointsPlayer1, pointsPlayer2: points.pointsPlayer2 + 1 })
        }
      } else {
        // eslint-disable-next-line no-undef
        alert('Respuesta Incorrecta')
      }
    }
    return (
      <div className='container'>
        <h2 className='questionToShow'>{question}</h2>
        <div className='row my-5'>
          <div className='col-lg-3'>
            <div className='answerContainer' onClick={() => handlerAnswer(correct_Answer)}>
              {correct_Answer}
            </div>
          </div>
          {/* eslint-disable-next-line camelcase */}
          {incorrect_Answers.map(answerItem => {
            return (
              <div className='col-lg-3' key={answerItem}>
                <div className='answerContainer' onClick={() => handlerAnswer(answerItem)}>
                  {answerItem}
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

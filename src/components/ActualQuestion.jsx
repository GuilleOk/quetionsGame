/* eslint-disable camelcase */
import React from 'react'

const ActualQuestion = ({ questions, question, correct_Answer, incorrect_Answers, playerPoints, setPlayerPoints, playerTurn, setPlayerTurn, setWinner }) => {
  if (questions.length === 0) {
    return ''
  } else {
    return (
      <div className='container'>
        <h2 className='questionToShow'>{question}</h2>
        <div className='row my-5'>
          <div className='col-lg-3'>
            <div className='answerContainer'>
              {correct_Answer}
            </div>
          </div>
          {/* eslint-disable-next-line camelcase */}
          {incorrect_Answers.map(answerItem => {
            return (
              <div className='col-lg-3' key={answerItem}>
                <div className='answerContainer'>
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

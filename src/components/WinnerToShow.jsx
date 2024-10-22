import React from 'react'

const WinnerToShow = ({ winner, setPlayerTurn, setPlayerPoints, setWinner, setTotalAnswers, setResetAll, resetAll }) => {
  const handleReset = () => {
    setPlayerTurn(true)
    setPlayerPoints({ pointsPlayer1: 0, pointsPlayer2: 0 })
    setWinner('')
    setTotalAnswers(0)
    setResetAll(!resetAll)
  }

  return (
    <div className={`${winner.length === 0 ? 'd-none' : 'winnerContainer'}`}>
      <h2 className='headerWinner my-4'>Winner</h2>
      <div className='winnerContentContainer my-4 mx-auto col'>
        <div>
          <h2 className='h2WinnerContent'>{winner}</h2>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-secondary' onClick={handleReset}>Reset Game</button>
        </div>
      </div>
    </div>
  )
}

export default WinnerToShow

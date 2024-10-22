import React, { useState } from 'react'
import QuestionComponent from './components/QuestionComponent'
import PointsTable from './components/PointsTable'
import WinnerToShow from './components/WinnerToShow'

const App = () => {
  const [playerTurn, setPlayerTurn] = useState(true)
  // eslint-disable-next-line no-unused-vars
  const [playerPoints, setPlayerPoints] = useState({ pointsPlayer1: 0, pointsPlayer2: 0 })
  // eslint-disable-next-line no-unused-vars
  const [winner, setWinner] = useState('')
  const [resetAll, setResetAll] = useState(false)
  const [totalAnswers, setTotalAnswers] = useState(0)

  const handlerReset = () => {
    setPlayerTurn(true)
    setPlayerPoints({ pointsPlayer1: 0, pointsPlayer2: 0 })
    setWinner('')
    setTotalAnswers(0)
    setResetAll(!resetAll)
  }
  const handlerSwitchTurn = () => {
    setPlayerTurn(!playerTurn)
  }
  return (
    <div className='container my-5'>
      <h1 className='header mb-5'>In this game the players must answer five questions each other, at the end who had gone more points win the game</h1>
      <div className='d-flex containerPlayerTurn justify-content-center'>
        <h1>{playerTurn ? 'Player 1' : 'Player 2'}</h1>
        {/* <button className='btn btn-primary' onClick={handlerSwitchTurn}>Change Turn</button> */}
        <button className='btn btn-outline-secondary' onClick={handlerReset}>Reset Game</button>
        <PointsTable playerPoints={playerPoints} />
      </div>
      <QuestionComponent setTotalAnswers={setTotalAnswers} totalAnswers={totalAnswers} setPlayerPoints={setPlayerPoints} resetAll={resetAll} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} winner={winner} setWinner={setWinner} playerPoints={playerPoints} />
      <WinnerToShow winner={winner} setPlayerTurn={setPlayerTurn} setPlayerPoints={setPlayerPoints} setWinner={setWinner} setTotalAnswers={setTotalAnswers} setResetAll={setResetAll} resetAll={resetAll} />
    </div>
  )
}

export default App

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

  const handlerHeader = (e) => {
    if (e.target.childNodes[0].textContent === 'Click here to show the info') {
      e.target.childNodes[0].textContent = 'In this game both players must answer five questions, at the end the player with the highest score will be the winner'
    } else {
      e.target.childNodes[0].textContent = 'Click here to show the info'
    }
  }

  return (
    <div className='container containerGame mt-5'>
      <h1 className='header mb-5' onClick={handlerHeader}>Click here to show the info</h1>
      <div className='d-flex row containerPlayerTurn justify-content-center align-items-center my-2'>
        <div className='col-4' style={{ border: '1px solid black', borderRadius: '10px', padding: '5px', backgroundColor: 'aliceblue', color: 'black' }}>
          <h2 style={{ textAlign: 'center', borderBottom: '1px solid darkgray', paddingBottom: '5px' }}>Player Turn</h2>
          <h2 style={{ textAlign: 'center', fontSize: '25px' }}>{playerTurn ? 'Player 1' : 'Player 2'}</h2>
        </div>
        <div className='col-4 d-flex justify-content-center'>
          <button className='btn btn-outline-secondary' onClick={handlerReset}>Reset Game</button>
        </div>
        <div className='col-4' style={{ border: '1px solid black', borderRadius: '10px', padding: '5px', backgroundColor: 'aliceblue', color: 'black' }}>
          <h2 style={{ textAlign: 'center', borderBottom: '1px solid darkgray', paddingBottom: '5px' }}>Score</h2>
          <PointsTable playerPoints={playerPoints} />
        </div>
      </div>
      <QuestionComponent setTotalAnswers={setTotalAnswers} totalAnswers={totalAnswers} setPlayerPoints={setPlayerPoints} resetAll={resetAll} playerTurn={playerTurn} setPlayerTurn={setPlayerTurn} winner={winner} setWinner={setWinner} playerPoints={playerPoints} />
      <WinnerToShow winner={winner} setPlayerTurn={setPlayerTurn} setPlayerPoints={setPlayerPoints} setWinner={setWinner} setTotalAnswers={setTotalAnswers} setResetAll={setResetAll} resetAll={resetAll} />
    </div>
  )
}

export default App

import React from 'react'

const PointsTable = ({ playerPoints }) => {
  return (
    <div>
      <h2 style={{ color: 'black' }}>{`Player 1: ${playerPoints.pointsPlayer1} / Player 2: ${playerPoints.pointsPlayer2}`}</h2>
    </div>
  )
}

export default PointsTable

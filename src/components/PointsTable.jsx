import React from 'react'

const PointsTable = ({ playerPoints }) => {
  return (
    <div>
      <h1>{`Player 1: ${playerPoints.pointsPlayer1}/ Player 2: ${playerPoints.pointsPlayer2}`}</h1>
    </div>
  )
}

export default PointsTable

export const useWinner = ({ totalAnswers, playerPoints, setWinner }) => {
  const validateWinner = () => {
    if (totalAnswers === 10) {
      const { pointsPlayer1, pointsPlayer2 } = playerPoints
      if (pointsPlayer1 < pointsPlayer2) {
        setWinner('Player 2')
      } else if (pointsPlayer1 > pointsPlayer2) {
        setWinner('Player 1')
      } else {
        setWinner('Draw')
      }
    }
  }
  return { validateWinner }
}

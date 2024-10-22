/* eslint-disable camelcase */
import { useState } from 'react'

export const useFetchQuestions = ({ winner }) => {
  const [questions, setQuestions] = useState([])
  const [numberOfQuestionToShow, setNumberOfQuestionToShow] = useState(0)
  const [question, setQuestion] = useState('')
  const [correct_Answer, setCorrect_Ansewers] = useState('')
  const [incorrect_Answers, setIncorrect_Answers] = useState([])

  function makeFetch () {
    setQuestions([])
    setNumberOfQuestionToShow(0)
    setQuestion('')
    setCorrect_Ansewers('')
    setIncorrect_Answers([])

    if (winner === '') {
      fetch('https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple')
        .then(response => response.json())
        .then(data => {
        // eslint-disable-next-line camelcase
          const newQuestions = data.results.map(({ question, correct_answer, incorrect_answers }) => ({ question, correct_answer, incorrect_answers }))
          setQuestions(newQuestions)
          setQuestion(newQuestions[numberOfQuestionToShow].question)
          setCorrect_Ansewers(newQuestions[numberOfQuestionToShow].correct_answer)
          setIncorrect_Answers(newQuestions[numberOfQuestionToShow].incorrect_answers)
        })
    }
  }
  return { makeFetch, questions, setQuestions, numberOfQuestionToShow, setNumberOfQuestionToShow, question, setQuestion, correct_Answer, setCorrect_Ansewers, incorrect_Answers, setIncorrect_Answers }
}

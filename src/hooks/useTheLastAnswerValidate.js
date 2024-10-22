/* eslint-disable camelcase */
export const useTheLastAnswerValidate = ({ questions, numberOfQuestionToShow, setNumberOfQuestionToShow, setQuestion, setCorrect_Ansewers, setIncorrect_Answers }) => {
  const validateLastQuestion = () => {
    if (questions.length !== 0) {
      if (numberOfQuestionToShow < 10) {
        setNumberOfQuestionToShow(numberOfQuestionToShow + 1)
        setQuestion(questions[numberOfQuestionToShow].question)
        setCorrect_Ansewers(questions[numberOfQuestionToShow].correct_answer)
        setIncorrect_Answers(questions[numberOfQuestionToShow].incorrect_answers)
      }
    }
  }
  return { validateLastQuestion }
}

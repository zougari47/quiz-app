import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { IAnswersComponentProps } from '../../types'

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap',
}

const Answers: FC<IAnswersComponentProps> = ({
  answers,
  correctAnswer,
  hasAnswered,
  updateScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const handleBtnClick = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer)
      updateScore(answer)
    }
  }

  if (hasAnswered) {
    return (
      <>
        {answers.map(a => (
          <Button
            sx={{ display: 'block', mb: 3 }}
            variant={
              selectedAnswer === a
                ? 'contained'
                : a === correctAnswer
                ? 'contained'
                : 'outlined'
            }
            color={a === correctAnswer ? 'success' : 'error'}
            disabled={a !== correctAnswer && a !== selectedAnswer}
            key={a}
          >
            {a}
          </Button>
        ))}
      </>
    )
  }

  // if he has not answer
  return (
    <>
      {answers.map(a => (
        <Button
          sx={{ display: 'block', mb: 3 }}
          variant={selectedAnswer === a ? 'contained' : 'outlined'}
          onClick={() => handleBtnClick(a)}
          key={a}
        >
          {a}
        </Button>
      ))}
    </>
  )
}

export default Answers

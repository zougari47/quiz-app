import { Button } from '@mui/material'
import { FC, useState } from 'react'
import { IAnswersComponentProps } from '../../interface'

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
    }
  }

  if (hasAnswered) {
    return (
      <div>
        {answers.map(a => (
          <Button
            variant={
              selectedAnswer === a
                ? 'contained'
                : a === correctAnswer
                ? 'contained'
                : 'outlined'
            }
            color={a === correctAnswer ? 'success' : 'error'}
            disabled={a !== correctAnswer && a !== selectedAnswer}
          >
            {a}
          </Button>
        ))}
      </div>
    )
  }

  // if he has not answer
  return (
    <div>
      {answers.map(a => (
        <Button
          variant={selectedAnswer === a ? 'contained' : 'outlined'}
          onClick={() => handleBtnClick(a)}
        >
          {a}
        </Button>
      ))}
      {/* has answer */}
      <div style={{ display: 'flex', gap: '1rem' }}>{}</div>
    </div>
  )
}

export default Answers

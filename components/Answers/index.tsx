import { Button } from '@mui/material'
import { FC, useState } from 'react'

interface IAnswersComponentProps {
  answers: string[]
  correctAnswer: string
  hasAnswered: boolean
  updateScore: () => void
}

const Answers: FC<IAnswersComponentProps> = ({
  answers,
  correctAnswer,
  hasAnswered,
  updateScore,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  // answers []
  // hasAnswered
  // correct answer
  const handleBtnClick = (answer: string) => {
    if (!hasAnswered) {
      setSelectedAnswer(answer)
    }
  }

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', marginRight: '5rem' }}>
        {answers.map(a => (
          <Button
            variant={selectedAnswer === a ? 'contained' : 'outlined'}
            onClick={() => handleBtnClick(a)}
          >
            {a}
          </Button>
        ))}
      </div>

      {/* has answer */}
      <div style={{ display: 'flex', gap: '1rem' }}>
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
    </>
  )
}

export default Answers

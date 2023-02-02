import { useRouter } from 'next/router'
import { FC, useRef, useState } from 'react'
import CheckRoundedIcon from '@mui/icons-material/CheckRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import { Box, Button, Card, Fade, Typography } from '@mui/material'
import { Container } from '@mui/system'
import type { IQuestionComponentProps } from '../../types'
import Answers from '../Answers'

const Question: FC<IQuestionComponentProps> = ({
  question,
  number,
  correctAnswer,
  falseAnswers,
  score,
  questionsCount,
  nextQuestion,
  updateScore,
  showLoader,
}) => {
  const [questionProps, setQuestionProps] = useState({
    selectedAnswer: '',
    hasAnswered: false,
  })
  const router = useRouter()
  const ALL_ANSWERS_SHUFFLED = useRef(
    [correctAnswer, ...falseAnswers].sort(() => Math.random() - 0.5)
  )
  const originArr = [correctAnswer, ...falseAnswers]

  // **** functions ****
  const handleSelectAnswer = (answer: string) => {
    setQuestionProps(prevProps => ({ ...prevProps, selectedAnswer: answer }))
  }

  const handleSubmitClick = () => {
    // check if has answered
    // if (!questionProps.hasAnswered) {
    //   show alert
    // }

    if (questionProps.selectedAnswer === correctAnswer) {
      updateScore() // + 1
    }

    setQuestionProps(prevProps => ({ ...prevProps, hasAnswered: true }))
  }

  const handleNextClick = () => {
    if (number === questionsCount) {
      showLoader()
      router.push(
        {
          pathname: '/result',
          query: { result: `${score}/${questionsCount}` },
        },
        '/result'
      )
      return
    }
    nextQuestion()
  }

  return (
    <Fade timeout={1500} in={true}>
      <Container>
        <Card sx={{ p: 3 }}>
          <Typography
            variant="subtitle2"
            display="block"
            textAlign="center"
            mt={2}
            mb={3}
          >
            Question {number}/{questionsCount}
          </Typography>

          <Typography
            display="block"
            textAlign="center"
            fontStyle="italic"
            mb={4}
          >
            {question}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-evenly',
              flexWrap: 'wrap',
            }}
          >
            <Answers
              correctAnswer={correctAnswer}
              answers={ALL_ANSWERS_SHUFFLED.current}
              hasAnswered={questionProps.hasAnswered}
              updateScore={handleSelectAnswer}
            />
          </Box>

          <Box
            component="div"
            display="flex"
            justifyContent="center"
            mt={4}
            gap={3}
          >
            <Button
              variant="outlined"
              size="large"
              endIcon={<CheckRoundedIcon />}
              onClick={handleSubmitClick}
              disabled={questionProps.hasAnswered ? true : false}
            >
              Submit
            </Button>
            <Button
              variant="contained"
              size="large"
              endIcon={<SendRoundedIcon />}
              disabled={questionProps.hasAnswered ? false : true}
              onClick={handleNextClick}
            >
              Next
            </Button>
          </Box>
        </Card>
      </Container>
    </Fade>
  )
}

export default Question

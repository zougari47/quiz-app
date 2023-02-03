//
// data type
//
export interface Quiz {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
}

export interface ICategory {
  id: number | string
  name: string
}

export interface IAnswerType extends ICategory {}

export interface IDifficulty extends ICategory {}

// ---------------------------------------------------- //

//
// pages props
//
export interface IHomePageProps {
  categories: ICategory[]
  difficulties: IDifficulty[]
  types: IAnswerType[]
}

export interface IResultPageProps {
  result: string
}

// ---------------------------------------------------- //

//
// components props
//
export interface IQuestionComponentProps {
  question: string
  number: number
  correctAnswer: string
  falseAnswers: string[]
  questionsCount: number
  score: number
  nextQuestion: () => void
  updateScore: () => void
  showLoader: () => void
}

export interface IFormOptions {
  questionNumber: number
  category: string
  type: string
  difficulty: string
}

export interface IAnswersComponentProps {
  answers: string[]
  correctAnswer: string
  hasAnswered: boolean
  updateScore: (x: string) => void
}

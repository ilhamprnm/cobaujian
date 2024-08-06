import React, {useContext} from 'react'
import { QuestionContext } from '../data/questions';

const Answer = ({answerText, index, onClick}) => {
  const [questionState, dispatch] = useContext(QuestionContext);
  const letterMapping = ["A", "B", "C", "D", "E"];
  return (
    <div 
    className='bg-white text-xl p-2 px-5 rounded-md shadow-roundBlack cursor-pointer' 
    style={{
      backgroundColor : questionState.soal1[questionState.currentQuestionIndex].currentAnswer === answerText ? '#529493' : 'white',
      color : questionState.soal1[questionState.currentQuestionIndex].currentAnswer === answerText ? 'white' : 'black'
    }} 
    onClick={(answerText) => onClick(answerText)}><span>{letterMapping[index]}</span>. {answerText}</div>
  )
}

export default Answer
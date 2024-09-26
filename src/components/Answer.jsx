import React, {useContext} from 'react'
import { QuestionContext } from '../data/questions';

const Answer = ({answerText, index, onClick, currentQuestion}) => {
  
  const [questionState, dispatch] = useContext(QuestionContext).value;
  const letterMapping = ["A", "B", "C", "D", "E"];
  return (
    <div 
    className='bg-white text-xl p-2 px-5 rounded-md shadow-roundBlack cursor-pointer' 
    style={{
      backgroundColor : currentQuestion.currentAnswer === answerText ? '#529493' : 'white',
      color : currentQuestion.currentAnswer === answerText ? 'white' : 'black'
    }} 
    onClick={(answerText) => onClick(answerText)}><span>{letterMapping[index]}</span>. {answerText}</div>
  )
}

export default Answer
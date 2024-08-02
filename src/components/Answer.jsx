import React from 'react'

const Answer = ({answerText, index}) => {
  const letterMapping = ["A", "B", "C", "D", "E"];
  return (
    <div className='bg-white text-xl p-2 px-5 rounded-md shadow-roundBlack cursor-pointer'><span>{letterMapping[index]}</span>. {answerText}</div>
  )
}

export default Answer
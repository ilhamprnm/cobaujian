import { createContext, useReducer } from "react";
import {soal1, shuffleAnswers} from './contohSoal.js'

const initialState = {
  soal1,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount : 0,
  answers: shuffleAnswers(soal1[0]),
  currentAnswer: '',
};

const reducer = (state, action) => {
  console.log( state, action)
  switch (action.type) {
    case "SELECT_ANSWER": {
      const newSoal1 = state.soal1.map((question, index) => {
        if (index === state.currentQuestionIndex) {
          return {
            ...question,
            currentAnswer: action.payload,
          };
        }
        return question;
      })
    
      return {
        ...state, 
        soal1: newSoal1
      }
      
    }
    case "NEXT_QUESTION": {
      const showResults = state.currentQuestionIndex === state.soal1.length - 1;
      const currentQuestionIndex = showResults 
      ? state.currentQuestionIndex 
      : state.currentQuestionIndex + 1;

      const answers = showResults 
      ? state.answers
      : shuffleAnswers(state.soal1[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers
      }
    } 
    case "PREVIOUS_QUESTION" : {
      const showResults = state.currentQuestionIndex === 0;
      const currentQuestionIndex = showResults 
      ? state.currentQuestionIndex 
      : state.currentQuestionIndex - 1;
      
      const answers = showResults 
      ? state.answers
      : shuffleAnswers(state.soal1[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers
      }
    }
  }
  return state;
}   

export const QuestionContext = createContext();

export const QuestionProvider = ({children}) => {
  const value = useReducer(reducer, initialState)

  

  return <QuestionContext.Provider value={value}>{children}</QuestionContext.Provider>
}
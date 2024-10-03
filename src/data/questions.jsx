import { createContext, useEffect, useReducer, useState } from "react";
import {soal1, shuffleAnswers} from './contohSoal.js'
import BankSoal from './BankSoal.js'

const initialState = {
  soal1,
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount : 0,
  answers: shuffleAnswers(soal1[0]),
  currentAnswer: '',
};

const reducer = (state, action) => {
  // console.log( state, action)
  switch (action.type) {
    case "DELETE_ANSWER": {
      const newSoal1 = state.soal1.map((question, index) => {
        if (index === state.currentQuestionIndex) {
          return {
            ...question,
            currentAnswer: '',
          }
        }
        return question;
      })
      return {
       ...state,
       soal1: newSoal1

      }
    }
    case "SELECT_NUMBER": {
      const currentQuestionIndex = action.payload - 1;
      const answers = shuffleAnswers(state.soal1[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        answers
      }
    }
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
  const bankSoal = BankSoal;
 
  const [modalData, setModalData] = useState({
    modal:false,
  });
  const [keranjangData, setKeranjangData] = useState([])
  const [allSoal, setAllSoal] = useState([])

  const updateData = () => {
    fetch('http://localhost:4000/allsoal')
    .then((response) => response.json())
    .then((data) => {setAllSoal(data)})

    fetch('http://localhost:4000/getkeranjangdata', {
      method:'GET',
      headers: {
        Accept:'application/form-data',
        'auth-token':`${localStorage.getItem('auth-token')}`,
        'Content-Type':'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {setKeranjangData(data)})
  }

  useEffect(() => {
    updateData();
  },[])

  const addToKeranjang = (ujian) => {

    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/addtokeranjang', {
        method:"POST",
        headers: {
          Accept:"application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':"application/json"
        },
        body:JSON.stringify(ujian)
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          alert(data.message)
          updateData();
        } else {
          alert(data.message)
        }
      })
    } else {
      alert('Masuk / Daftar terlebih dahulu')
    }
    updateData();
  }

  const removeFromKeranjang = (ujian) => {
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:4000/removefromkeranjang', {
        method:"POST",
        headers: {
          Accept:"application/form-data",
          'auth-token':`${localStorage.getItem('auth-token')}`,
          'Content-Type':"application/json"
        },
        body:JSON.stringify(ujian)
      })
      .then((response) => response.json())
      .then((data) => {
        if (data.success === true) {
          alert(data.message)
          updateData();
        } else {
          alert(data.message)
        }
      })
    } else {
      alert('Masuk / Daftar terlebih dahulu')
    }
    
  }

  return <QuestionContext.Provider value={{value, bankSoal, modalData, setModalData, addToKeranjang, removeFromKeranjang, allSoal, keranjangData}}>{children}</QuestionContext.Provider>
}
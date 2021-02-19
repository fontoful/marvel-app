import { createContext, useReducer, useEffect } from 'react'

import { AppReducer } from './AppReducer'

// initial state
const initialState = {
  characterBookmarks: localStorage.getItem('characterBookmarks')
    ? JSON.parse(localStorage.getItem('characterBookmarks'))
    : [],
  comicsBookmarks: localStorage.getItem('comicsBookmarks')
    ? JSON.parse(localStorage.getItem('comicsBookmarks'))
    : [],
}

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  useEffect(() => {
    localStorage.setItem(
      'characterBookmarks',
      JSON.stringify(state.characterBookmarks),
    )
    localStorage.setItem(
      'comicsBookmarks',
      JSON.stringify(state.comicsBookmarks),
    )
  }, [state])

  const addCharToBookmarks = character => {
    dispatch({ type: 'ADD_CHAR_BOOKMARK', payload: character })
  }

  return (
    <GlobalContext.Provider
      value={{
        characterBookmarks: state.characterBookmarks,
        comicsBookmarks: state.comicsBookmarks,
        addCharToBookmarks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

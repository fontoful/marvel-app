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
    console.log('setting localStorage', state)
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

// import { createContext, useReducer, useEffect } from 'react'

// import { AppReducer } from './AppReducer'

// //interface
// import { IResultProps } from '../types/APItypes'

// export const GlobalContext = createContext<initialStateProps | null>(null)

// type GlobalProviderProps = {
//   children: React.ReactNode
// }

// export type initialStateProps = {
//   characterBookmarks: Partial<IResultProps>[]
//   comicsBookmarks: Partial<IResultProps>[]
// }

// const initialState: initialStateProps = {
//   characterBookmarks: localStorage.getItem('characterBookmarks')
//     ? JSON.parse(localStorage.getItem('characterBookmarks'))
//     : [],
//   comicsBookmarks: localStorage.getItem('comicsBookmarks')
//     ? JSON.parse(localStorage.getItem('comicsBookmarks'))
//     : [],
// }

// export const GlobalProvider = ({ children }: GlobalProviderProps) => {
//   const [state, dispatch] = useReducer(AppReducer, initialState)

//   return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>
// }

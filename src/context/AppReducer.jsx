export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAR_BOOKMARK':
      return {
        ...state,
        characterBookmarks: [action.payload, ...state.characterBookmarks],
      }
    default:
      console.error(`no matching reducer type for ${action.type}`)
      return state
  }
}

// import { initialStateProps } from './GlobalContext'

// type Action =
//   | {
//       type: 'ADD_CHAR_BOOKMARK'
//     }
//   | { type: 'REMOVE_CHAR_BOOKMARK' }

// export const AppReducer = (state: initialStateProps, action: Action): any => {
//   switch (action.type) {
//     case 'ADD_CHAR_BOOKMARK': {
//       return 'add'
//     }
//     case 'REMOVE_CHAR_BOOKMARK': {
//       return 'remove'
//     }
//     default: {
//       console.log('unhandled type')
//     }
//   }
// }

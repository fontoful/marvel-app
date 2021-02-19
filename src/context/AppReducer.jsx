export const AppReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_CHAR_BOOKMARK':
      return {
        ...state,
        characterBookmarks: [action.payload, ...state.characterBookmarks],
      }
    case 'REMOVE_CHAR_BOOKMARK':
      return {
        ...state,
        characterBookmarks: state.characterBookmarks.filter(
          character => character.id !== action.payload,
        ),
      }
    default:
      console.error(`no matching reducer type for ${action.type}`)
      return state
  }
}

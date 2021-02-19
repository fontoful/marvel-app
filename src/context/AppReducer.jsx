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

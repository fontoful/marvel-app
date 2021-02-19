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
    case 'ADD_COMIC_BOOKMARK':
      return {
        ...state,
        comicsBookmarks: [action.payload, ...state.comicsBookmarks],
      }
    case 'REMOVE_COMIC_BOOKMARK':
      return {
        ...state,
        comicsBookmarks: state.comicsBookmarks.filter(
          comic => comic.id !== action.payload,
        ),
      }
    default:
      console.error(`no matching reducer type for ${action.type}`)
      return state
  }
}

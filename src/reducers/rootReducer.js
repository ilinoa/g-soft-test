// noinspection UnterminatedStatementJS
const initialState = {
  posts: [],
  isFetching: false,
  currentPage: 0,
}
const rootReducer = (state=initialState, { type, payload }) => {
  switch (type) {
    case 'FETCH_POSTS':
      // noinspection UnterminatedStatementJS
      return {
        ...state,
        isFetching: true,
      }
    case 'ADD_POSTS':
      // noinspection UnterminatedStatementJS
      return {
        ...state,
        posts: [...state.posts, ...payload.posts,],
        isFetching: false,
        currentPage: ++(state.currentPage),
      }
    default:
      return state;
  }
};

export default rootReducer;
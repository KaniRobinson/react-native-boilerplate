import {
  FETCH_JOKES,
  FETCH_JOKES_SUCCESS,
  FETCH_JOKES_FAILURE
} from "./actions";

const INITIAL_STATE = {
  jokesList: {
    jokes: [],
    error: null,
    loading: false
  }
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_JOKES:
      return { ...state, jokesList: { jokes: [], error: null, loading: true } };
    case FETCH_JOKES_SUCCESS:
      return {
        ...state,
        jokesList: { jokes: action.payload.value, error: null, loading: false }
      };
    case FETCH_JOKES_FAILURE:
      return {
        ...state,
        postsList: {
          posts: [],
          error: action.payload.value || { message: action.payload.message },
          loading: false
        }
      };
    default:
      return state;
  }
}

import { NEWS } from './actionTypes';

const INITIAL_STATE = {
  data: {
    articles: [],
    totalResults: 0,
    status: null,
  },
  hasError: false,
  isLoading: false,
};

export function news(state = INITIAL_STATE, action) {
  switch (action.type) {
    case NEWS.loading:
      return {
        ...state,
        isLoading: action.isLoading
      };
    case NEWS.error:
      return {
        ...state,
        hasError: action.hasError
      };
    case NEWS.success:
      return {
        ...state,
        data: action.data,
        hasError: false,
        isLoading: false
      };
    default:
      return state;
  }
}

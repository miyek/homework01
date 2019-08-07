import { NEWS } from './actionTypes';

const INITIAL_STATE = {
  data: [],
  hasError: false,
  isLoading: true,
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
        data: action.data
      };
    default:
      return state;
  }
}

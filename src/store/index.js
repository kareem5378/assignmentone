import { legacy_createStore } from "redux";
let initialState = {
  loading: false,
  error: null,
  blogs: [],
  activeBlog: {},
};
function blogsReducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: "Error Loading",
      };
    case "FETCH_ALL":
      return {
        ...state,
        loading: false,
        blogs: action.payload,
      };
    case "FETCH_SINGLE":
      return {
        ...state,
        loading: false,
        activeBlog: action.payload,
      };
    case "CLEAN":
      return {
        ...state,
        activeBlog: {},
      };
    default:
      return state;
  }
}
const store = legacy_createStore(blogsReducer);

export default store;

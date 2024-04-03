const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};

const loginReducer = (
  state = initialState,
  action: any
) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
        error: null,
      };

    case "failed_login":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: action.payload,
      };
    case "logout":
      return {
        ...state,
        isLoggedIn: false,
        user: null,
        error: null,
      };

    default:
      return state;
  }
};

export default loginReducer;

const initialState = {
  is_logged_in: false,
  access_token: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.payload) {
    case "LOGIN":
      return {
        is_logged_in: true,
        access_token: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

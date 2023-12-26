const initialState = {
    email: '',
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
        case 'logout':
          return {
            ...state,
            email :""
          }
      default:
        return state;
    }
  };
  
  export default userReducer;
  
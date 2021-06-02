const sortingReducer = (state = true, action) => {
    switch (action.type) {
      case "SORT_ASCENDING":
        return !state;
      default:
        return state;
    }
  };
  
  export default sortingReducer;
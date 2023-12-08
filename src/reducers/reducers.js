const initialState = {
  notes: [],
  editIndex: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NOTE":
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((_, index) => index !== action.payload),
      };
    case "SET_EDIT_INDEX":
      return {
        ...state,
        editIndex: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

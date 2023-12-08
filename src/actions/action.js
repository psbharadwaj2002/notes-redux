export const addNote = (note) => ({
  type: "ADD_NOTE",
  payload: note,
});

export const editNote = (index, note) => ({
  type: "EDIT_NOTE",
  payload: { index, note },
});

export const deleteNote = (index) => ({
  type: "DELETE_NOTE",
  payload: index,
});

export const setEditIndex = (index) => ({
  type: "SET_EDIT_INDEX",
  payload: index,
});

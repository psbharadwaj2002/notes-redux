import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { addNote, editNote, setEditIndex } from "../actions/action";
import "../styles/styles.css";

function InputForm({ addNote, editNote, editIndex, setEditIndex, notes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editIndex !== null && notes.length > 0) {
      const { title: noteTitle, description: noteDescription } =
        notes[editIndex];
      setTitle(noteTitle);
      setDescription(noteDescription);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editIndex, notes]);

  // to save, if we are saving for 1st time, then we will directly push to store,
  // else we will pass the index which needs to be edited, then we will edit it and will return the result
  const handleSave = () => {
    if (title && description) {
      if (editIndex === null) {
        addNote({ title, description });
      } else {
        editNote(editIndex, { title, description });
        setEditIndex(null);
      }

      // clearing the fields after adding/editing
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="input">
      <h1>{editIndex !== null ? "Edit Note" : "Add a Note"}</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Take a note..."
      ></textarea>
      <button onClick={handleSave}>+</button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes,
  editIndex: state.editIndex,
});

export default connect(mapStateToProps, { addNote, editNote, setEditIndex })(
  InputForm
);

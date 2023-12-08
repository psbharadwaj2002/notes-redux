import React from "react";
import { connect } from "react-redux";
import "../styles/styles.css";
import { deleteNote, setEditIndex } from "../actions/action";
import edit from "../images/edit.png";
import deleteimg from "../images/delete.png";

function NoteList({ notes, deleteNote, setEditIndex }) {
  return (
    <div className="NoteList">
      {notes.map((note, index) => (
        <div key={index} className="note">
          <h2>{note.title}</h2>
          <p>{note.description}</p>
          <div className="buttons">
            <button onClick={() => deleteNote(index)}>
              <img src={deleteimg} />
            </button>
            <button onClick={() => setEditIndex(index)}>
              <img src={edit} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  notes: state.notes,
});

export default connect(mapStateToProps, { deleteNote, setEditIndex })(NoteList);

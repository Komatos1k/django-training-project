import React from "react";
import "../styles/Note.css";

function Note({ note, onDelete }) {
    const formatedDate = new Date(note.created_at).toLocaleDateString("uk-UA");

    return (
        <div className="note-container">
            <p className="note-title">{note.title}</p>
            <p className="note-content">{note.content}</p>
            <p className="note-date">{formatedDate}</p>
            <button className="delete-button" onClick={() => onDelete(note.id)}>
                Видалити
            </button>
        </div>
    );
}

export default Note;
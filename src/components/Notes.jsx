import React from "react";

export default function Notes({ notes }) {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <div className='note-item' key={note.id}>
          <div className='note-content'>
            <h2 className='note-title'> {note.title} </h2>
            <p className='note-date'> {note.createdAt} </p>
            <p className='note-body'> {note.body} </p>
          </div>
          {/* //button */}
        </div>
      ))}
    </div>
  );
}

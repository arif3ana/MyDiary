import React from "react";
import ActionButton from "./ActionButton";

export default function Notes({ notes, onDelete, onArchived }) {
  if (notes.length === 0) {
    return (
      <div className='notes-list'>
        <p className='empty-message'> Tidak ada catatan </p>
      </div>
    );
  }

  return (
    <div className='notes-list'>
      {notes.map((note, index) => (
        <div className='note-item' key={note.id}>
          <div className='note-content'>
            <h2 className='note-title'> {note.title} </h2>
            <p className='note-date'> {note.createdAt} </p>
            <p className='note-body'> {note.body} </p>
          </div>
          <ActionButton
            index={index}
            id={note.id}
            onDelete={onDelete}
            onArchived={onArchived}
          />
        </div>
      ))}
    </div>
  );
}

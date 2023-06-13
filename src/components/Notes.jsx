import React from "react";
import ActionButton from "./ActionButton";

export default function Notes({ notes, onDelete, onArchived }) {
  const unArchived = notes.filter((note) => note.archived === false);
  if (unArchived.length === 0) {
    return (
      <div className='notes-list'>
        <p className='empty-message'> Tidak ada catatan </p>
      </div>
    );
  }

  return (
    <div className='notes-list'>
      {notes.map((note, index) => {
        if (note.archived === false) {
          return (
            <div className='note-item' key={note.id}>
              <div className='note-content'>
                <h2 className='note-title'> {note.title} </h2>
                <p className='note-date'> {note.createdAt} </p>
                <p className='note-body'> {note.body} </p>
              </div>
              <ActionButton
                index={index}
                onDelete={onDelete}
                onArchived={onArchived}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

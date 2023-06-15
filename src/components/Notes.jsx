import React, { useState } from "react";
import ActionButton from "./ActionButton";

export default function Notes({ notes, onDelete, onArchived }) {
  const [showMore, setShowMore] = useState(false);
  const unArchived = notes.filter((note) => note.archived === false);
  if (unArchived.length === 0) {
    return (
      <div className='notes-list'>
        <p className='empty-message'> Tidak ada catatan </p>
      </div>
    );
  }

  return (
    <div className='notes-list row'>
      {notes.map((note, index) => {
        if (note.archived === false) {
          return (
            <div className='col-md-4 mb-3' key={note.id}>
              <div className='note-item' key={note.id}>
                <div className='note-content'>
                  <h2 className='note-title'> {note.title} </h2>
                  <p className='note-date'> {note.createdAt} </p>
                  <p className='note-body'>
                    {showMore ? note.body : `${note.body.substring(0, 250)}`}{" "}
                    {""}
                    <a
                      href='#'
                      className='btn-link'
                      onClick={() => setShowMore(!showMore)}>
                      {showMore ? "Show less" : "Show More"}
                    </a>
                  </p>
                </div>
                <ActionButton
                  index={index}
                  onDelete={onDelete}
                  onArchived={onArchived}
                />
              </div>
            </div>
          );
        }
      })}
    </div>
  );
}

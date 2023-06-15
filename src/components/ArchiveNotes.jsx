import React, { useState } from "react";
import ActionButton from "./ActionButton";

export default function Notes({ notes, onDelete, onArchived }) {
  const [showMore, setShowMore] = useState(false);
  const archived = notes.filter((note) => note.archived === true);
  if (archived.length === 0) {
    return (
      <div className='notes-list'>
        <p className='empty-message'> Archive empty </p>
      </div>
    );
  }

  return (
    <div className='notes-list row'>
      {notes.map((note, index) => {
        if (note.archived === true) {
          return (
            <div className='col-sm-4 mb-3' key={note.id}>
              <div className='note-item'>
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

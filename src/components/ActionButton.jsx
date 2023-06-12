import React from "react";

export default function ActionButton({ index, onDelete, onArchived }) {
  return (
    <div className='note-item__action'>
      <button
        className='note-item__delete-button'
        onClick={() => onDelete(index)}>
        Delete
      </button>
      <button
        className='note-item__archive-button'
        onClick={() => onArchived(index)}>
        Archived
      </button>
    </div>
  );
}

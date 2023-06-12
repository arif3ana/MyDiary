import React from "react";

export default function ActionButton({ index, onDelete, onArchived, id }) {
  return (
    <div className='note-item__action'>
      <button
        className='note-item__delete-button'
        onClick={() => onDelete(index)}>
        Delete
      </button>
      <button
        className='note-item__archive-button'
        onClick={() => onArchived(id)}>
        Archived
      </button>
    </div>
  );
}

import React from "react";

export default function ActionButton({ index, onDelete, onArchived }) {
  return (
    <div className='note-item__action'>
      <button
        className='note-item__delete-button'
        onClick={() => onDelete(index)}>
        Delete
      </button>
      <button //jika di route archive content Unarchive , jika bukan di route arsive content Archive
        className='note-item__archive-button'
        onClick={() => onArchived(index)}>
        Unarchive
      </button>
    </div>
  );
}

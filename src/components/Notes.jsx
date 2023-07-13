import React, { useState } from "react";
import ActionButton from "./ActionButton";

export default function Notes({ notes, onDelete, onArchived }) {
  const [showMore, setShowMore] = useState([]);
  const toggleShow = (id) => {
    const newShowMore = [...showMore];
    const index = newShowMore.findIndex((i) => i.id === id);
    // findIndex() akan mengembalikan nilai -1 yang menandakan bahwa tidak ada elemen yang sesuai dengan kondisi yang diberikan.
    if (index !== -1) {
      newShowMore[index].status = !newShowMore[index].status;
    } else {
      newShowMore.push({ id, status: true });
    }
    setShowMore(newShowMore);
  };

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
          const status =
            showMore.find((show) => show.id === note.id)?.status || false;
          //  operator ?. digunakan untuk menghindari error jika item dengan id yang dicari tidak ditemukan atau item tersebut tidak memiliki property 'status'. Kemudian operator atau (||) digunakan untuk memberikan nilai default false jika nilai status adalah undefined atau null
          return (
            <div className='col-lg-4 mb-3' key={`${index}-${note.id}`}>
              <div role='list' className='note-item' key={note.id}>
                <div className='note-content'>
                  <h2 className='note-title'> {note.title} </h2>
                  <p className='note-date'> {note.createdAt} </p>
                  <p className='note-body'>
                    {status ? note.body : `${note.body.substring(0, 250)}`}{" "}
                    {note.body.length > 250 ? (
                      <button
                        className='btn-link'
                        onClick={() => toggleShow(note.id)}>
                        {status ? "Show less" : "Show More"}
                      </button>
                    ) : null}
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

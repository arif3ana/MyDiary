import React from "react";
import Navbar from "../components/Navbar";
import ArchiveNotes from "../components/ArchiveNotes";

export default function Archive() {
  const notes = []; //array untuk menampung data object dari method handleAddNote

  const data = JSON.parse(localStorage.getItem("NOTES")); //mengambil && parsing data storage
  if (data !== null) {
    for (const note of data) {
      notes.push(note);
    }
  }

  //function untuk menghapus data notes
  const removeNote = (index) => {
    notes.splice(index, 1);
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  const archivedNote = (index) => {
    if (notes[index].archived === false) {
      notes[index].archived = true;
    } else {
      notes[index].archived = false;
    }
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  return (
    <>
      <div className='app-body container-fluid'>
        <h2 className='content-title'>Record archive</h2>
        <ArchiveNotes
          notes={notes}
          onDelete={removeNote}
          onArchived={archivedNote}
        />
      </div>
    </>
  );
}

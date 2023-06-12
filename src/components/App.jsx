import React from "react";
import "../style/App.css";
import InputDiary from "./InputDiary";
import Notes from "./Notes";

function App() {
  const notes = []; //array untuk menampung data object dari method handleAddNote

  const data = JSON.parse(localStorage.getItem("NOTES")); //mengambil && parsing data storage
  if (data !== null) {
    for (const note of data) {
      notes.push(note);
    }
  }

  //function untuk menambah data notes
  const onAddNotes = (prop) => {
    notes.push(prop);
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  //function untuk menghapus data notes
  const removeNote = (index) => {
    notes.splice(index, 1);
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  // const archivedNote = (idNote) => {
  //   const target = notes.find(() => idNote);
  //   target.forEach((getNote) => {
  //     console.log((getNote.archived = true));
  //   });
  // };

  return (
    <>
      <header className='App-header'>
        <h1>MyDiary</h1>
      </header>
      <InputDiary addNotes={onAddNotes} />
      <div className='App-body'>
        <h2>My Notes</h2>
        <Notes notes={notes} onDelete={removeNote} onArchived={archivedNote} />
      </div>
    </>
  );
}

export default App;

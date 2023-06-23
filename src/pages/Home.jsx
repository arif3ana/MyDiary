import React from "react";
import "../style/App.css";
import InputDiary from "../components/InputDiary";
import Notes from "../components/Notes";
import Navbar from "../components/Navbar";

function Home() {
  const notes = []; //array untuk menampung data object dari method handleAddNote

  const data = JSON.parse(localStorage.getItem("NOTES")); //mengambil && parsing data storage
  if (data !== null) {
    for (const note of data) {
      notes.push(note);
    }
  }

  //function untuk menambah data notes
  const onAddNotes = (prop) => {
    notes.unshift(prop);
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  //function untuk menghapus data notes
  const removeNote = (index) => {
    notes.splice(index, 1);
    localStorage.setItem("NOTES", JSON.stringify(notes));
    window.location.reload();
  };

  // function untuk mengubah nilai property archived menjadi true dan sebeliknya
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
      <header>
        <Navbar />
      </header>
      <section>
        <InputDiary addNotes={onAddNotes} />
      </section>
      <div className='app-body container-fluid'>
        <h2 className='content-title'>My Notes</h2>
        <Notes notes={notes} onDelete={removeNote} onArchived={archivedNote} />
      </div>
    </>
  );
}

export default Home;

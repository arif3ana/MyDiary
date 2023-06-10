import React from "react";
import "../style/App.css";
import InputDiary from "./InputDiary";
import Notes from "./Notes";

function App() {
  const data = localStorage.getItem("NOTES"); //mengambil data dari local storage
  const notes = JSON.parse(data); //parsing data dari string ke object menggunakan json.parse
  return (
    <>
      <header className='App-header'>
        <h1>MyDiary</h1>
      </header>
      <InputDiary />
      <div className='App-body'>
        <h2>My Notes</h2>
        <Notes notes={notes} />
      </div>
    </>
  );
}

export default App;

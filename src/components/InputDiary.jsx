import React from "react";
import { showFormattedDate } from "../utils";
class InputDiary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };
    this.changeBody = this.changeBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeTitle(event) {
    this.setState(() => {
      return { title: event.target.value };
    });
  }

  changeBody(event) {
    this.setState(() => {
      return { body: event.target.value };
    });
  }

  notes = []; //array untuk menampung data object dari method handleAddNote
  submit(e) {
    e.preventDefault();
    this.notes.push(this.handleAddNote());
    localStorage.setItem("NOTES", JSON.stringify(this.notes));
  }

  handleAddNote() {
    return {
      id: +new Date(),
      title: this.state.title,
      body: this.state.body,
      createdAt: showFormattedDate(new Date()),
      archived: false,
    };
  }

  render() {
    return (
      <>
        <form className='note-input' onSubmit={this.submit}>
          <h3>Buat Catatan</h3>
          <input
            className='input-title'
            name='title'
            placeholder='Judul'
            value={this.state.title}
            onChange={this.changeTitle}
            required
          />
          <textarea
            className='input-body'
            name='body'
            placeholder='Tuliskan catatanmu disini'
            value={this.state.body}
            onChange={this.changeBody}
            required
          />
          <button type='submit'>Buat</button>
        </form>
      </>
    );
  }
}

export default InputDiary;

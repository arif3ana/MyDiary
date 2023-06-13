import React from "react";
import { showFormattedDate } from "../utils";

class InputDiary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: +new Date(),
      title: "",
      body: "",
      createdAt: showFormattedDate(new Date()),
      archived: false,
    };
    this.changeBody = this.changeBody.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    // this.handleAddNote = this.handleAddNote.bind(this);
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

  submit(e) {
    e.preventDefault();
    this.props.addNotes(this.state);
  }

  // handleAddNote() {
  //   const note = {
  //     title: this.state.title,
  //     body: this.state.body,
  //   };
  //   return note;
  // }

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

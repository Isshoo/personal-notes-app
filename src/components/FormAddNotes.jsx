import React from 'react';

class FormAddNotes extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNotes(this.state);
  }

  render() {
    return (
      <>
        <form id="noteForm" autoComplete="off" onSubmit={this.onSubmitEventHandler}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Judul"
              minLength="5"
              aria-describedby="titleValidation"
              value={this.state.title}
              onChange={this.onTitleChangeEventHandler}
            />
            <p id="titleValidation" className="validation-message" aria-live="polite"></p>
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              required
              placeholder="Deskripsi"
              minLength="10"
              aria-describedby="descriptionValidation"
              value={this.state.body}
              onChange={this.onBodyChangeEventHandler}
            ></textarea>
            <p id="descriptionValidation" className="validation-message" aria-live="polite"></p>
          </div>
          <button type="submit" id="notesSubmit">
            Tambahkan
          </button>
        </form>
      </>
    );
  }
}

export default FormAddNotes;

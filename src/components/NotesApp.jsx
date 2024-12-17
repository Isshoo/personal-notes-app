import React from 'react';
import ContainerFormAddNotes from './ContainerFormAddNotes';
import ContainerNotes from './ContainerNotes';
import { getInitialData } from '../utils';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unarchivedNotes: getInitialData(),
      archivedNotes: [],
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onShowArchiveHandler = this.onShowArchiveHandler.bind(this);
    this.onShowUnarchiveHandler = this.onShowUnarchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        unarchivedNotes: [
          ...prevState.unarchivedNotes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
    this.onShowUnarchiveHandler();
  }

  onDeleteHandler(id) {
    const unarchivedNotes = this.state.unarchivedNotes.filter((note) => note.id !== id);
    const archivedNotes = this.state.archivedNotes.filter((note) => note.id !== id);
    this.setState({ unarchivedNotes, archivedNotes });
  }

  onShowArchiveHandler() {
    const unarchivedListBtn = document.querySelector('#allNotesBtn');
    const archivedListBtn = document.querySelector('#archivedListBtn');
    unarchivedListBtn.classList.remove('active');
    archivedListBtn.classList.add('active');

    const archivedListContainer = document.querySelector('#archivedListContainer');
    const unarchivedListContainer = document.querySelector('#unarchivedListContainer');
    archivedListContainer.style.display = 'grid';
    unarchivedListContainer.style.display = 'none';
  }

  onShowUnarchiveHandler() {
    const unarchivedListBtn = document.querySelector('#allNotesBtn');
    const archivedListBtn = document.querySelector('#archivedListBtn');
    archivedListBtn.classList.remove('active');
    unarchivedListBtn.classList.add('active');

    const archivedListContainer = document.querySelector('#archivedListContainer');
    const unarchivedListContainer = document.querySelector('#unarchivedListContainer');
    archivedListContainer.style.display = 'none';
    unarchivedListContainer.style.display = 'grid';
  }

  onSearchHandler({ query }) {
    let filteredNotes = [];
    if (query === '') {
      filteredNotes = this.state.notes;
    } else {
      filteredNotes = this.state.notes.filter((note) =>
        note.title.toLowerCase().includes(query.toLowerCase())
      );
    }
    this.setState({ unarchivedNotes: filteredNotes });
  }
  render() {
    return (
      <>
        <main>
          <ContainerFormAddNotes addNotes={this.onAddNotesHandler} />
          <ContainerNotes
            unarchivedNotes={this.state.unarchivedNotes}
            archivedNotes={this.state.archivedNotes}
            onDelete={this.onDeleteHandler}
            onShowArchivedList={this.onShowArchiveHandler}
            onShowUnarchivedList={this.onShowUnarchiveHandler}
            onSearchNotes={this.onSearchHandler}
          />
        </main>
      </>
    );
  }
}

export default NotesApp;

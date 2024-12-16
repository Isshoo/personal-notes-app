import React from 'react';
import ContainerFormAddNotes from './ContainerFormAddNotes';
import ContainerNotes from './ContainerNotes';
import { getInitialData } from '../utils';

class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    };

    this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
  }

  onAddNotesHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
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
  }
  render() {
    return (
      <>
        <main>
          <ContainerFormAddNotes addNotes={this.onAddNotesHandler} />
          <ContainerNotes notes={this.state.notes} />
        </main>
      </>
    );
  }
}

export default NotesApp;

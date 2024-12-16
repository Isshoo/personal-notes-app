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
  }
  render() {
    return (
      <>
        <main>
          <ContainerFormAddNotes />
          <ContainerNotes notes={this.state.notes} />
        </main>
      </>
    );
  }
}

export default NotesApp;

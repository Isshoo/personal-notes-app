import React from 'react';
import ContainerFormAddNotes from './ContainerFormAddNotes';
import ContainerNotes from './ContainerNotes';

function NotesApp() {
  return (
    <>
      <div className="container">
        <ContainerFormAddNotes />
        <ContainerNotes />
      </div>
    </>
  );
}

export default NotesApp;

import React from 'react';
import ShowUnarchivedListBtn from './ShowUnarchivedListBtn';
import ShowArchivedListBtn from './ShowArchivedListBtn';
import SearchNotesForm from './SearchNotesForm';
import NotesList from './NotesList';

function ContainerNotes({ notes }) {
  return (
    <>
      <section id="notesContainer">
        <div className="judul-notes-container">
          <h2>My Notes</h2>
        </div>
        <ShowUnarchivedListBtn />
        <ShowArchivedListBtn />
        <SearchNotesForm />
        <NotesList notes={notes} />
      </section>
    </>
  );
}

export default ContainerNotes;

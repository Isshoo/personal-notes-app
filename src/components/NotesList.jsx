import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ notes, onDelete }) {
  return (
    <div className="notes-list">
      {notes.length > 0 ? (
        notes.map((note) => <NotesItem key={note.id} id={note.id} {...note} onDelete={onDelete} />)
      ) : (
        <div className="blankList">Tidak ada catatan</div>
      )}
    </div>
  );
}

export default NotesList;

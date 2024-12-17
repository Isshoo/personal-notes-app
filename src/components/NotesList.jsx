import React from 'react';
import NotesItem from './NotesItem';

function NotesList({ unarchivedNotes, archivedNotes, onDelete }) {
  return (
    <>
      <div className="notes-list" id="unarchivedListContainer">
        {unarchivedNotes.length > 0 ? (
          unarchivedNotes.map((note) => (
            <NotesItem key={note.id} id={note.id} {...note} onDelete={onDelete} />
          ))
        ) : (
          <div className="blankList">Tidak ada catatan</div>
        )}
      </div>
      <div className="notes-list" id="archivedListContainer">
        {archivedNotes.length > 0 ? (
          archivedNotes.map((note) => (
            <NotesItem key={note.id} id={note.id} {...note} onDelete={onDelete} />
          ))
        ) : (
          <div className="blankList">Tidak ada catatan</div>
        )}
      </div>
    </>
  );
}

export default NotesList;

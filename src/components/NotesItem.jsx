import React from 'react';
import NoteButtons from './NoteButtons';
import { showFormattedDate } from '../utils';

function NotesItem({ title, body, createdAt }) {
  return (
    <div className="note">
      <div className="notes-item">
        <div className="note-title">
          <h3>{title}</h3>
        </div>
        <div className="note-date">
          <p>{showFormattedDate(createdAt)}</p>
        </div>
        <div className="note-des">
          <p>{body}</p>
        </div>
        <NoteButtons />
      </div>
    </div>
  );
}

export default NotesItem;

import React from 'react';
import NoteButtons from './NoteButtons';

function NotesItem() {
  return (
    <>
      <div class="notes-item">
        <div class="note-title">
          <h3>Tes Dulu</h3>
        </div>
        <div class="note-date">
          <p>Senin, 15 November 2024</p>
        </div>
        <div class="note-des">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque reiciendis aliquam sequi
            ex nam! Eveniet nam natus quidem? Earum quas sit ad repellendus odit perspiciatis velit
            nisi expedita. Repudiandae, libero.
          </p>
        </div>
        <NoteButtons />
      </div>
    </>
  );
}

export default NotesItem;

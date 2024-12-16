import React from 'react';
import ArchiveBtn from './ArchiveBtn';
import UnarchiveBtn from './UnarchiveBtn';
import DeleteBtn from './DeleteBtn';

function NoteButtons() {
  return (
    <>
      <div class="buttons">
        <ArchiveBtn />
        <UnarchiveBtn />
        <DeleteBtn />
      </div>
    </>
  );
}

export default NoteButtons;
import React from 'react';
import ArchiveBtn from './ArchiveBtn';
import UnarchiveBtn from './UnarchiveBtn';
import DeleteBtn from './DeleteBtn';

function NoteButtons({ id, onDelete }) {
  return (
    <>
      <div className="buttons">
        <ArchiveBtn />
        <UnarchiveBtn />
        <DeleteBtn id={id} onDelete={onDelete} />
      </div>
    </>
  );
}

export default NoteButtons;

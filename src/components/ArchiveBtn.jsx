import React from 'react';

function ArchiveBtn({ id, onArchiving }) {
  return (
    <>
      <button className="btn-archive" onClick={() => onArchiving(id)}>
        <i className="fa-solid fa-folder-plus"></i>
      </button>
    </>
  );
}

export default ArchiveBtn;

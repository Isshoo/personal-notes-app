import React from 'react';

function UnarchiveBtn({ id, onUnarchiving }) {
  return (
    <>
      <button className="btn-unarchive" onClick={() => onUnarchiving(id)}>
        <i className="fa-solid fa-folder-minus"></i>
      </button>
    </>
  );
}

export default UnarchiveBtn;

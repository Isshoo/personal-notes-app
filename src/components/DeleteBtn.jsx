import React from 'react';

function DeleteBtn({ id, onDelete }) {
  return (
    <>
      <button className="btn-delete" onClick={() => onDelete(id)}>
        <i className="fa-solid fa-trash-alt"></i>
      </button>
    </>
  );
}

export default DeleteBtn;

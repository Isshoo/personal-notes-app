import React from 'react';

function FormAddNotes() {
  return (
    <>
      <form id="noteForm" autoComplete="off">
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Judul"
            minLength="5"
            aria-describedby="titleValidation"
          />
          <p id="titleValidation" className="validation-message" aria-live="polite"></p>
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Deskripsi"
            minLength="10"
            aria-describedby="descriptionValidation"
          ></textarea>
          <p id="descriptionValidation" className="validation-message" aria-live="polite"></p>
        </div>
        <button type="submit" id="notesSubmit">
          Tambahkan
        </button>
      </form>
    </>
  );
}

export default FormAddNotes;

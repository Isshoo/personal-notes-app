import React from 'react';

function FormAddNotes() {
  return (
    <>
      <form id="noteForm" autocomplete="off">
        <div>
          <label for="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Judul"
            minlength="5"
            aria-describedby="titleValidation"
          />
          <p id="titleValidation" class="validation-message" aria-live="polite"></p>
        </div>
        <div>
          <label for="description">Description</label>
          <textarea
            id="description"
            name="description"
            required
            placeholder="Deskripsi"
            minlength="10"
            aria-describedby="descriptionValidation"
          ></textarea>
          <p id="descriptionValidation" class="validation-message" aria-live="polite"></p>
        </div>
        <button type="submit" id="notesSubmit">
          Tambahkan
        </button>
      </form>
    </>
  );
}

export default FormAddNotes;

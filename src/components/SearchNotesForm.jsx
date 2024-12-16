import React from 'react';

function SearchNotesForm() {
  return (
    <>
      <form id="searchForm">
        <input type="text" id="searchInput" placeholder="Cari Notes" />
        <button type="submit" id="searchSubmit">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </>
  );
}

export default SearchNotesForm;

import React from "react";

function Search({ onSearch }) {
  function handleChange(e) {
    onSearch(e.target.value); // تحديث حالة البحث عند التغيير
  }

  return (
    <form className="searchbar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={handleChange} // تحديث حالة البحث عند التغيير
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;

import React from "react";
import Search from "./Search";

function Header({ onSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} /> {/* حقل البحث في الرأس */}
    </header>
  );
}

export default Header;

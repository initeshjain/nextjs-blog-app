import React, { useState } from "react";
import styles from "./Searchbar.module.css";

export default function Searchbar({
  searchText,
  setSearchText,
  fetchFunc,
}) {
  // const [searchInput, setSearchInput] = useState(searchText);

  const search = (e) => {
    e.preventDefault();
    fetchFunc();
    // localStorage.setItem(`${page}-search`, searchInput);
    // let catSearch = localStorage.getPost(`${page}-category`);

    // let query = "?page=" + pageno;
    // if (catSearch) {
    //   query += "&categories=" + catSearch;
    // } else {
    //   localStorage.removeItem(`${page}-category`);
    // }

    // if (searchInput && searchInput !== "") {
    //   query += "&search=" + searchInput;
    // } else {
    //   localStorage.removeItem(`${page}-search`);
    // }
    // window.location.replace(query);
  };

  return (
    <div className={styles.searchbox_container}>
      <form onSubmit={search} className={styles.form}>
        <input
          type="search"
          placeholder={`search...`}
          className={styles.searchbar}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button className={styles.btn}>Search</button>
      </form>
    </div>
  );
}

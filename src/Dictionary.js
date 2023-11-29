import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  //musíme zastavit zadanou hodnotu z eventu tak aby se již nehýbala, nastavením setKeyword
  // spolu s pozicí hodnoty (event.target.value) jinak se nic nepropíše a nelze dál s hodnotou
  // pracovat. Kdykoliv pak někdo napíše novou hodnotu, useState tuto hodnotu updatuje a pošle
  // tuto další hodnotu funcki setKeyword.
  function handleKeywordChange(event) {
    event.preventDefault(); // zabraňuje dalšímu načítání stránky
    setKeyword(event.target.value);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching ${keyword}`);
  }
  ////kdykoliv píšeme do vyhledávače hodnotu, spustí se fce uchovaná v OnChange
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" autoFocus={true} />
        <input type="submit" value="submit" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}

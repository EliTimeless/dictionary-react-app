import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data);
  }

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  //musíme zastavit zadanou hodnotu z eventu tak aby se již nehýbala, nastavením setKeyword
  // spolu s pozicí hodnoty (event.target.value) jinak se nic nepropíše a nelze dál s hodnotou
  // pracovat. Kdykoliv pak někdo napíše novou hodnotu, useState tuto hodnotu updatuje a pošle
  // tuto další hodnotu funcki setKeyword.
  function handleKeywordChange(event) {
    event.preventDefault(); // zabraňuje dalšímu načítání stránky
    setKeyword(event.target.value);
  }

  ////kdykoliv píšeme do vyhledávače hodnotu, spustí se fce uchovaná v OnChange
  return (
    <div className="Dictionary">
      <form onSubmit={Search}>
        <input type="search" onChange={handleKeywordChange} autoFocus={true} />
      </form>
    </div>
  );
}

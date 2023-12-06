import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null); //nastaví jako výchozí hodnotu "object",
  //jelikož se hledaná hodnota neustále mění, musíme použít useState, abychom ji mohli zastavit a definovat
  // pokud chceme předat dál informace, které zachytíme v tomto komponentu a předat je pomocí
  // proměnné do jiného komponentu, musíme použít useState a pak v novém komponentu použít props.xxx

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].partOfSpeech); //slovni druh /verb/noun
    //console.log(response.data[0].meanings[0].synonyms[0]); //synonymum

    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();

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
      <Results results={results} />
    </div>
  );
}

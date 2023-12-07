import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null); //nastaví jako výchozí hodnotu "object",
  //jelikož se hledaná hodnota neustále mění, musíme použít useState, abychom ji mohli zastavit a definovat
  // pokud chceme předat dál informace, které zachytíme v tomto komponentu a předat je pomocí
  // proměnné do jiného komponentu, musíme použít useState a pak v novém komponentu použít props.xxx
  let [loaded, setLoaded] = useState(false); //funkce, ktera se postara o nacitani stranky navic s
  //pouzitim vyrazu, se kterym se stranka nacte jiz poprve

  function handleResponse(response) {
    //console.log(response.data[0].meanings[0].partOfSpeech); //slovni druh /verb/noun
    //console.log(response.data[0].meanings[0].synonyms[0]); //synonymum

    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  //musíme zastavit zadanou hodnotu z eventu tak aby se již nehýbala, nastavením setKeyword
  // spolu s pozicí hodnoty (event.target.value) jinak se nic nepropíše a nelze dál s hodnotou
  // pracovat. Kdykoliv pak někdo napíše novou hodnotu, useState tuto hodnotu updatuje a pošle
  // tuto další hodnotu funcki setKeyword.
  function handleKeywordChange(event) {
    event.preventDefault(); // zabraňuje dalšímu načítání stránky
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    // pokud se stranka nacte, zobraz toto:
    return (
      <div className="Dictionary">
        <section>
          <h2>What do you want to search?</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
              autoFocus={true}
            />
          </form>
          <div className="hint">suggested word: leaf, forest, jungle</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    // pokud se stranka nenacte, zobraz fci load, ve ktere je fce search, ktera vyhleda vyraz
    load();
    return "loading";
  }
}

////kdykoliv píšeme do vyhledávače hodnotu, spustí se fce uchovaná v OnChange

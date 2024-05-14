import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null); 
  let [loaded, setLoaded] = useState(false); 
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleSCResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;

    axios.get(apiUrl).then(handleDictionaryResponse);

    let scApiKey = "f93tf3a769fe4b66c3783bc2a833o0d4";
    let scApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${scApiKey}`;

    axios.get(scApiUrl).then(handleSCResponse);
   
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  
  function handleKeywordChange(event) {
    event.preventDefault(); 
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
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
          <div className="hint">
            examples: landscape, sky, mindfulness, calm
          </div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "loading";
  }
}


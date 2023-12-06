import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  console.log(props.meaning.definitions);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <p>
              <strong> Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong>
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </p>
          </span>
        );
      })}
    </div>
  );
}

//takto se zobrazi vsechny definice z api, nejen ty konkretne vypsane.
// Map funkce vyhleda vsechny hodnoty (projede indexy) ukryte pod hodnotami vypsanymi v curly braces {}
// pokud hodnota z API je Array, má více než 1 hodnotu pod sebou, proto fce map

import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <div className="example">
              <em>{definition.example}</em>
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

//takto se zobrazi vsechny definice z api, nejen ty konkretne vypsane.
// Map funkce vyhleda vsechny hodnoty (projede indexy) ukryte pod hodnotami vypsanymi v curly braces {}
// pokud hodnota z API je Array, má více než 1 hodnotu pod sebou, proto fce map

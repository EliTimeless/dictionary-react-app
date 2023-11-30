import React from "react";
import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              {definition.example}
            </p>
          </div>
        );
      })}
    </div>
  );
}

//takto se zobrazi vsechny definice z api, nejen ty konkretne vypsane.
// Map funkce vyhleda vsechny hodnoty (projede indexy) ukryte pod hodnotami vypsanymi v curly braces {}
// pokud hodnota z API je Array, má více než 1 hodnotu pod sebou, proto fce map

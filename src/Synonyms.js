import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <span className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </span>
    );
  } else {
    return null;
  }
}
//pouzijeme fci map, abychom projeli vsechny hodnoty v array

/*





(
    <div className="Synonyms">
      <p>{props.definition}</p>
    </div>
  );
  */

import React from "react";
import "./Results.css";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.results) {
    // podmínka= pokud máme nějaký result, zobraz tento return
    return (
      <div className="Results">
        <h2>
          {props.results.word.slice(0, 1).toUpperCase() +
            props.results.word.slice(1, props.results.word.length)}
        </h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <span key={index}>
              <Meaning meaning={meaning} />
            </span>
            //proměnná menaning je jako parametr funkce, který jsme získali zmapováním definic
          );
        })}
      </div>
    ); // abych mohla najit vsechny definice pro results.meanings, musim pouzit fci map
  } else {
    //pokud se žádny result neukáže, nic nezobrazuj
    return null;
  }
}

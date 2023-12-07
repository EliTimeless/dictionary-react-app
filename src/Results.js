import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    // podmínka= pokud máme nějaký result, zobraz tento return
    return (
      <div className="Results">
        <section>
          <h2>
            {props.results.word.slice(0, 1).toUpperCase() +
              props.results.word.slice(1, props.results.word.length)}
          </h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetic phonetic={phonetic} />
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
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

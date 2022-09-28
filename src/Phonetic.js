import React from "react";
import "./Phonetic.css"

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      {props.phonetic.audio ? (
        <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
          Listen
          <i class="fa-solid fa-volume-high"></i>
        </a>
      ) : null}
      <span className="text">{props.phonetic.text} </span>
    </div>
  );
}

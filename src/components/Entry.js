import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.description}>
          {props.emoji}
        </span>
        <span><h3>{props.description}</h3></span>
      </dt>
      <dd><h3>{props.code}</h3></dd>
    </div>
  );
}

export default Entry;

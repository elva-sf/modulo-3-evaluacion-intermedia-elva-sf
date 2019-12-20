import React from "react";

function Pokemon(props) {
  console.log(props.pokemon);
  return (
    <li className="poke-card">
      <img></img>
      <h2></h2>
      <ul></ul>
    </li>
  );
}

export default Pokemon;

import React from "react";

function Pokemon(props) {
  return (
    <li className="poke-card">
      <img src={props.pokemon.url}></img>
      <h2 className="poke-name">{props.pokemon.name}</h2>
      <ul className="poke-typesList">
        {props.pokemon.types.map((type, index) => {
          return (
            <li key={index} className="poke-type">
              {type}
            </li>
          );
        })}
      </ul>
    </li>
  );
}

export default Pokemon;

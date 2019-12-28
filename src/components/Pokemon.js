import React from "react";
import PropTypes from "prop-types";

function Pokemon(props) {
  return (
    <li className="poke-card">
      <img src={props.pokemon.url} alt={props.pokemon.name} />
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
Pokemon.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string,
  types: PropTypes.string
};

export default Pokemon;

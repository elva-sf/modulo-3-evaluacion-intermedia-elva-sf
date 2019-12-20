import React from "react";
import "../stylessheeth/App.css";
import apiData from "../api/data.json";
import PokeList from "./PokeList.js";
import Pokemon from "./Pokemon.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemons: apiData
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1 className="listTitle">Mi lista de pokemon</h1>
        <PokeList>
          {[
            this.state.pokemons.map((pokemon, index) => {
              return <Pokemon key={index} pokemon={pokemon} />;
            })
          ]}
        </PokeList>
      </React.Fragment>
    );
  }
}

export default App;

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
        {/* <div className="App">{JSON.stringify(this.state.pokemons)}</div> */}
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

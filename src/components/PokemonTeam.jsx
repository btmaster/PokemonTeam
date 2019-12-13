import React, {Component} from 'react';

// CSS
import '../css/PokemonTeam.css';

const types = {
  "normal": "#A8A77A",
  "fire": "#EE8130",
  "water": "#6390F0",
  "electric": "#F7D02C",
  "grass": "#7AC74C",
  "ice": "#96D9D6",
  "fighting": "#C22E28",
  "poison": "#A33EA1",
  "ground": "#E2BF65",
  "flying": "#A98FF3",
  "psychic": "#F95587",
  "bug": "#A6B91A",
  "rock": "#B6A136",
  "ghost": "#735797",
  "dragon": "#6F35FC",
  "dark": "#705746",
  "steel": "#B7B7CE",
  "fairy": "#D685AD",
};


/**
 * Your selected team of pokemons
 *
 */
class PokemonTeam extends Component {

  renderAbilities(abilities) {
    return abilities.map((ability) => {
      return (
        <li>
          {ability}
        </li>
      )
    })
  }

  renderTeam() {
    return this.props.team.map((pokemon) => {
      return (
        <div className="detail-team" style={{
          backgroundColor: types[pokemon.types[0].name]
        }}>
          <img src={pokemon.image} alt="pokemon"/>
          <h3>{pokemon.name}</h3>
          <ul>
            {this.renderAbilities(pokemon.abilities)}
          </ul>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="pokemon-team">
        {
          this.renderTeam()
        }
      </div>
    )
  }
}

export default PokemonTeam;

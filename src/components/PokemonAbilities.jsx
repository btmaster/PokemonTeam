import React, {Component} from 'react';

// CSS
import '../css/PokemonAbilities.css';


/**
 * Pokemon abilities where you can select your attacks
 *
 */
class PokemonAbilities extends Component {

  renderSelectedAbilities() {
    return this.props.selectedAbilities.map((selectedAbility) => {
      return (
        <li>
          {selectedAbility}
        </li>
      );
    });
  }

  renderAbilitiesList() {
    return this.props.abilities.map((ability) => {
      return !this.props.selectedAbilities.includes(ability.name)
      ?
      <li onClick={() => {
          this.props.setAblities(ability.name);
      }}>
        {ability.name}
      </li>
      : null
    });
  }

  render() {
    return (
      <div id="container-abilities">
        <h4>Your attacks</h4>
        <ul className="abilities">
          {
            this.renderSelectedAbilities()
          }
        </ul>
        <h4>Select your attack</h4>
        <ul className="abilities">
          {
            this.renderAbilitiesList()
          }
        </ul>
      </div>
    );
  }

}

export default PokemonAbilities;

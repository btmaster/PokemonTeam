// ./assets/js/components/Todos.js

import React, {Component} from 'react';

/**
 *
 */
class PokemonAbilities extends Component {
  constructor(props) {
      super(props);
      this.state = {
          abilities: props.abilities || [],
          selectedAbilities: []
      }
  }

  renderSelectedAbilities() {
    return this.state.selectedAbilities.map((selectedAbility) => {
      return (
        <li>
          {selectedAbility}
        </li>
      );
    });
  }

  setSelected(ability) {
    this.state.selectedAbilities.push(ability);
    this.setState({
      selectedAbilities: this.state.selectedAbilities
    });
  }

  renderAbilitiesList() {
    return this.state.abilities.map((ability) => {
        return !this.state.selectedAbilities.includes(ability.name)
        ?
        <li onClick={() => this.setSelected(ability.name)}>
          {ability.name}
        </li>
        : null
    });
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.renderSelectedAbilities()
          }
        </ul>
        <ul>
          {
            this.renderAbilitiesList()
          }
        </ul>
      </div>
    );
  }

}

export default PokemonAbilities;

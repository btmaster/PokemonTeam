// ./assets/js/components/PokemonSelector.js

import React, {Component} from 'react';

// Components
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import PokemonTeam from './PokemonTeam';

/**
 *
 */
class PokemonSelector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTeam: 1,
            selectedPokemonName: "",
            selectedPokemon: {}
        }
    }

    handleSubmit() {

    }

    render() {
        return (
            <div>
                <div className="pokemon-selector">
                  <PokemonList onSelectPokemon={(name) => this.setState({selectedPokemonName: name})}/>
                  {
                    this.state.selectedPokemonName
                    ?
                    <PokemonDetail name={this.state.selectedPokemonName} onSubmit={() => this.handleSubmit()}/>
                    : null
                  }
                </div>
                <PokemonTeam />
            </div>
        )
    }
}

export default PokemonSelector;

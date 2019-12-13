import React, {Component} from 'react';
import Swal from 'sweetalert2';

// CSS
import '../css/PokemonSelector.css';

// Components
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import PokemonTeam from './PokemonTeam';


/**
* The overview where you can select the pokemons
*
*/
class PokemonSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTeam: [],
      selectedPokemonName: ""
    }
  }

  handleSubmit(pokemon, abilities) {
    if (!abilities || abilities.length === 0) {
      Swal.fire({
        title: 'Are you even a pokemon trainer?',
        text: 'Select abilities to fight with your pokemon',
        icon: 'error',
        confirmButtonText: 'Oh yeah sorry'
      });
    } else {
      pokemon.abilities = abilities;
      this.state.selectedTeam.push(pokemon);
      if (this.state.selectedTeam.length === 6) {
        Swal.fire({
          title: 'Ready to rumble?',
          text: 'Your team is ready, FIGHT!',
          icon: 'success',
          confirmButtonText: 'Die you team rocket!'
        });
      } else {
        this.setState({
          selectedTeam: this.state.selectedTeam,
          selectedPokemonName: {}
        });
      }
    }
  }

  render() {
    return (
      <div id="container-selector">
        {
          this.state.selectedTeam.length === 6
          ? null
          :
          <div>
            <PokemonList onSelectPokemon={(name) => this.setState({selectedPokemonName: name})}/>
            {
              this.state.selectedPokemonName
              ?
              <PokemonDetail name={this.state.selectedPokemonName} handleSubmit={(pokemon, abilities) => this.handleSubmit(pokemon, abilities)}/>
              : <div id="container-detail"></div>
          }
        </div>
      }
      <PokemonTeam team={this.state.selectedTeam}/>
      <button onClick={() => {
          this.setState({
            selectedTeam: [],
            selectedPokemonName: ""
          });
        }}>
        Reset
      </button>
    </div>
  )
}
}

export default PokemonSelector;

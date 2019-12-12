// ./assets/js/components/PokemonDetail.js

import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

/**
 *
 */
class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            pokemon: {}
        }
    }

    componentDidUpdate() {
      if (!this.props.name && this.props.name !== this.state.name) {
        const pokemon = gql`
        query {
          Pokemons(first: 151) {
            id,
            name
          }
        }
        `
      }
    }



    render() {
        return (
          <div class="pokemon-detail">
            <h1>{this.state.name}</h1>
          </div>
        )
    }
}

export default PokemonDetail;

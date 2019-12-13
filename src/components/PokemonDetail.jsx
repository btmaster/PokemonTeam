// ./assets/js/components/PokemonDetail.jsx

import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//Components
import PokemonStats from './PokemonStats';
import PokemonAbilities from './PokemonAbilities';

const GET_POKEMON = gql`
query Pokemon($name: String!) {
  Pokemon(name: $name) {
    name,
    abilities{name},
    image,
    stats{name, value}
  }
}
`;
/**
*
*/
function PokemonDetail(props) {
  const name = props.name;
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });
  return (
    <div>
      {
        (loading || !data || error)
        ?
        null
        :
        <div>
          <div>
            <img src={data.Pokemon.image} alt="pokemon" />
            <p>{data.Pokemon.name}</p>
          </div>
          <PokemonStats stats={data.Pokemon.stats}/>
          <PokemonAbilities abilities={data.Pokemon.abilities}/>
        </div>
      }
    </div>
  )
}

export default PokemonDetail;

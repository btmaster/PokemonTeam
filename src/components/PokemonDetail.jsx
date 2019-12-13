import React, { useState } from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

//Components
import PokemonStats from './PokemonStats';
import PokemonAbilities from './PokemonAbilities';

// CSS
import '../css/PokemonDetail.css';

const GET_POKEMON = gql`
query Pokemon($name: String!) {
  Pokemon(name: $name) {
    name,
    abilities{name},
    image,
    types{name},
    stats{name, value}
  }
}
`;


/**
 * The detail of the pokemon
 *
 */
function PokemonDetail(props) {
  const [abilities, setAblities] = useState([]);
  const name = props.name;
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name },
  });
  return (
    <div id="container-detail">
      {
        (loading || !data || error)
        ?
        null
        :
        <div>
          <div id="container-info">
            <img src={data.Pokemon.image} alt="pokemon" />
            <h2>{data.Pokemon.name}</h2>
            <button onClick={() => {
                setAblities([])
                props.handleSubmit(data.Pokemon, abilities);
            }}>
                Add to team
            </button>
          </div>
          <PokemonStats stats={data.Pokemon.stats}/>
          <PokemonAbilities
            abilities={data.Pokemon.abilities}
            selectedAbilities={abilities}
            setAblities={(ability) => {
              console.log(ability);
              abilities.push(ability);
              setAblities([...abilities]);
            }}
          />
        </div>
      }
    </div>
  )
}

export default PokemonDetail;

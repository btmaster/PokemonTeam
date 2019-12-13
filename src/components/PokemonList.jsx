// ./assets/js/common/PokemonList.jsx

import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Downshift from 'downshift'

// CSS
import '../css/PokemonList.css';

// Components
import Loading from './common/Loading';

const GET_POKEMONS = gql`
query {
  Pokemons(first: 151) {
    id,
    name
  }
}
`

const PokemonList = (props) => (
  <div id="container-list">
    <Query query={GET_POKEMONS}>
      {({ loading, error, data }) => {
        if (loading) return <Loading/>;
        if (error) return <div>Error: {error}</div>;
          return (
            <Downshift
              onChange={selection => {
                if (selection && selection.name) props.onSelectPokemon(selection.name);
              }}
              itemToString={item => (item ? item.value : '')}
              >
              {({
                getInputProps,
                getItemProps,
                getLabelProps,
                getMenuProps,
                isOpen,
                inputValue,
                highlightedIndex,
                selectedItem,
              }) => (
                <div>
                  <label {...getLabelProps()}>Select a pokemon</label><br/>
                  <input {...getInputProps()} />
                  <ul {...getMenuProps()}>
                    {isOpen
                      ? data.Pokemons
                      .filter(item => !inputValue || item.name.includes(inputValue))
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.id,
                            index,
                            item,
                            style: {
                              backgroundColor:
                              highlightedIndex === index ? '#FDCC07' : '#3A5D9F',
                              color:
                              highlightedIndex === index ? '#3A5D9F' : '#FDCC07',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                          >
                          {item.name}
                        </li>
                      ))
                      : data.Pokemons
                      .map((item, index) => (
                        <li
                          {...getItemProps({
                            key: item.id,
                            index,
                            item,
                            style: {
                              backgroundColor:
                              highlightedIndex === index ? '#FDCC07' : '#3A5D9F',
                              color:
                              highlightedIndex === index ? '#3A5D9F' : '#FDCC07',
                              fontWeight: selectedItem === item ? 'bold' : 'normal',
                            },
                          })}
                          >
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </Downshift>
            )
          }}
        </Query>
      </div>
    )

    export default PokemonList;

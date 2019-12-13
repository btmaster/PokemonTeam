// ./assets/js/components/PokemonStats.jsx

import React from 'react';

// CSS
import '../css/PokemonStats.css';

function renderStats(stats) {
  return stats.map((stat) => {
    return (
      <li>
        <p>
          {stat.name} <span>{stat.value}</span>
        </p>
      </li>
    )
  });
}


/**
 * Overview of the stats of the pokemon
 *
 */
function PokemonStats(props) {
  return (
    <div id="container-stats">
      <h2>Stats</h2>
      <ul>
        {
          renderStats(props.stats)
        }
      </ul>
    </div>
  )
}

export default PokemonStats;

// ./assets/js/components/PokemonStats.jsx

import React from 'react';


function renderStats(stats) {
  return stats.map((stat) => {
    return (
      <li>
        <p>
          {stat.name} {stat.value}
        </p>
      </li>
    )
  });
}

/**
 *
 */
function PokemonStats(props) {
  return (
    <div>
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

/**
 * @file PokemonList.js
 * @description component uses a map to display all of the pokemon.
 */

import React, { Component } from 'react';
import Pokemon from './Pokemon';

class PokemonList extends Component {
	render() {
		return (
			this.props.pokemons &&
			this.props.pokemons.map((pokemon, idx) => {
				return (
					<Pokemon
						key={idx}
						name={pokemon.name}
						image={pokemon.sprites.front_default}
						id={pokemon.id}
                        height={pokemon.height}
                        weight={pokemon.weight}
                        addUserFavorite={this.props.addUserFavorite}
                        removeUserFavorite={this.props.removeUserFavorite}
                        pokemon={pokemon}
                        
					/>
				);
			})
		);
	}
}

export default PokemonList;

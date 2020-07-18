import { 
    fetchSinglePokemon,
    fetchSinglePokemonSuccess,
    fetchSinglePokemonError,
    fetchSinglePokemonCleanSearch
} from './fetch-single-pokemon-actions'
import {
    pokemonDetailsShow,
    pokemonDetailsHide
} from './pokemon-details-actions'
import {
    setAllPokemons,
    setAllPokemonsSuccess
} from './set-all-pokemons-actions'

export default {
    fetchSinglePokemon,
    fetchSinglePokemonSuccess,
    fetchSinglePokemonError,
    fetchSinglePokemonCleanSearch,
    pokemonDetailsShow,
    pokemonDetailsHide,
    setAllPokemons,
    setAllPokemonsSuccess
}
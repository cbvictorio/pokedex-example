import {
    FETCH_SINGLE_POKEMON,
    FETCH_SINGLE_POKEMON_SUCCESS,
    FETCH_SINGLE_POKEMON_ERROR,
    FETCH_SINGLE_POKEMON_CLEAN_SEARCH
} from 'ReduxFiles/action-types';

const fetchSinglePokemon = payload => ({
    type: FETCH_SINGLE_POKEMON,
    payload
})

const fetchSinglePokemonSuccess = payload => ({
    type: FETCH_SINGLE_POKEMON_SUCCESS,
    payload
})

const fetchSinglePokemonError = payload => ({
    type: FETCH_SINGLE_POKEMON_ERROR,
    payload
})

const fetchSinglePokemonCleanSearch = () => ({
    type: FETCH_SINGLE_POKEMON_CLEAN_SEARCH
})

export {
    fetchSinglePokemon,
    fetchSinglePokemonSuccess,
    fetchSinglePokemonError,
    fetchSinglePokemonCleanSearch
}
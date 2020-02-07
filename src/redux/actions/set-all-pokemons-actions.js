import { 
    SET_ALL_POKEMONS, 
    SET_ALL_POKEMONS_SUCCESS 
} from '@/redux/action-types'

const setAllPokemons = payload => ({
    type: SET_ALL_POKEMONS,
    payload
})

const setAllPokemonsSuccess = payload => ({
    type: SET_ALL_POKEMONS_SUCCESS,
    payload
})

export {
    setAllPokemons,
    setAllPokemonsSuccess
}
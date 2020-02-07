import { 
    FETCH_SINGLE_POKEMON_SUCCESS,
    FETCH_SINGLE_POKEMON_ERROR,
    FETCH_SINGLE_POKEMON_CLEAN_SEARCH
} from '@/redux/action-types';

const initialState = {
    pokemon: null,
    error: ''
}

function fetchSinglePokemonReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case FETCH_SINGLE_POKEMON_SUCCESS: return {
            ...state,
            pokemon: payload
        }
        case FETCH_SINGLE_POKEMON_ERROR: return {
            ...state,
            pokemon: null,
            error: payload
        }
        case FETCH_SINGLE_POKEMON_CLEAN_SEARCH: return {
            pokemon: null,
            error: ''
        }
        default: return state
    }
}

export default fetchSinglePokemonReducer
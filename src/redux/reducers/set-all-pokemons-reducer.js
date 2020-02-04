import { 
    SET_ALL_POKEMONS,
    SET_ALL_POKEMONS_SUCCESS 
} from 'ReduxFiles/action-types'

const initialState = {
    pokemons: [],
    loading: true
}

function fetchPokemonReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case SET_ALL_POKEMONS: {
            return { 
                ...state, 
                loading: true 
            }
        }
        case SET_ALL_POKEMONS_SUCCESS: {
            return {
                ...state,
                pokemons: [...state.pokemons, ...payload],
                loading: false
            }
        }
        default: return state
    }
}

export default fetchPokemonReducer
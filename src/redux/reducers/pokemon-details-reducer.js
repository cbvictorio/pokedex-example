import { 
    POKEMON_DETAILS_SHOW,
    POKEMON_DETAILS_HIDE 
} from 'ReduxFiles/action-types'

const initialState = {
    pokemon: null,
    visible: false
}

function pokemonDetailsReducer(state = initialState, action) {
    const { type, payload } = action
    switch(type) {
        case POKEMON_DETAILS_SHOW: 
        return {
            visible: true,
            pokemon: payload
        }
        case POKEMON_DETAILS_HIDE: return {
            pokemon: null,
            visible: false
        }
        default: return state
    }
}

export default pokemonDetailsReducer

import {
    POKEMON_DETAILS_SHOW,
    POKEMON_DETAILS_HIDE
} from 'ReduxFiles/action-types'

const pokemonDetailsShow = payload => ({
    type: POKEMON_DETAILS_SHOW,
    payload
})

const pokemonDetailsHide = () => ({
    type: POKEMON_DETAILS_HIDE
})

export { 
    pokemonDetailsShow,
    pokemonDetailsHide
}
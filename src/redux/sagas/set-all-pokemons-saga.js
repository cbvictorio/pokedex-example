import { call, put, takeEvery } from 'redux-saga/effects'
import { SET_ALL_POKEMONS } from 'ReduxFiles/action-types'
import { setAllPokemonsSuccess } from 'ReduxFiles/actions/set-all-pokemons-actions'
import { API_URL } from 'Utils/constants'

async function fetchPokemonsFromIds(array) {
    const pokemons = await Promise.all(array.map(async id => {
        const request = await fetch(`${API_URL}/${id}`)
        const pokemon = await request.json()
        return pokemon
    }))

    return pokemons
}

function * setAllPokemons(action) {
    const { payload } = action
    const pokemons = yield call(fetchPokemonsFromIds, payload)
    yield put(setAllPokemonsSuccess(pokemons))
}

function * watchSetAllPokemons() {
    yield takeEvery(SET_ALL_POKEMONS, setAllPokemons)
}

export default watchSetAllPokemons

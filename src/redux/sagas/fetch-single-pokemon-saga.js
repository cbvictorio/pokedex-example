import { call, put, takeEvery } from 'redux-saga/effects'
import { API_URL } from '@/utils/constants'
import { FETCH_SINGLE_POKEMON } from '@/redux/action-types'
import { 
    fetchSinglePokemonSuccess,
    fetchSinglePokemonError
} from '@/redux/actions/fetch-single-pokemon-actions'

async function fetchPokemon(idName) {
    try {
        const response = await fetch(`${API_URL}/${idName}`)
        const pokemon = await response.json()
        return pokemon
    } catch (e) {
        console.log(e)
        return {
            error: `No pokemons with the name or id "${idName}" were found`
        }
    }
}

function * fetchSinglePokemon(action) {
    const { payload } = action
    const pokemon = yield call(fetchPokemon, payload)
    if (pokemon.error) {
        yield put(fetchSinglePokemonError(pokemon.error))
    } else {
        yield put(fetchSinglePokemonSuccess(pokemon))
    }
}

function * watchFetchSinglePokemonSaga() {
    yield takeEvery(FETCH_SINGLE_POKEMON, fetchSinglePokemon)
}

export default watchFetchSinglePokemonSaga

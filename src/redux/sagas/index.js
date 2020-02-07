import { all } from 'redux-saga/effects'
import fetchSinglePokemonSaga from '@/redux/sagas/fetch-single-pokemon-saga'
import setAllPokemonsSaga from '@/redux/sagas/set-all-pokemons-saga'


function * masterSaga() {
    yield all([
        fetchSinglePokemonSaga(),
        setAllPokemonsSaga()
    ])
}

export default masterSaga
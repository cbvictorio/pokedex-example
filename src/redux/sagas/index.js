import { all } from 'redux-saga/effects'
import fetchSinglePokemonSaga from 'ReduxFiles/sagas/fetch-single-pokemon-saga'
import setAllPokemonsSaga from 'ReduxFiles/sagas/set-all-pokemons-saga'


function * masterSaga() {
    yield all([
        fetchSinglePokemonSaga(),
        setAllPokemonsSaga()
    ])
}

export { masterSaga }
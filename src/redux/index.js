import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import allPokemonsReducer from 'ReduxFiles/reducers/set-all-pokemons-reducer'
import singlePokemonReducer from 'ReduxFiles/reducers/fetch-single-pokemon-reducer'
import pokemonDetailsReducer from 'ReduxFiles/reducers/pokemon-details-reducer'

import { masterSaga } from 'ReduxFiles/sagas'

const reducers = combineReducers({
    allPokemonsReducer,
    singlePokemonReducer,
    pokemonDetailsReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(masterSaga)

export default store
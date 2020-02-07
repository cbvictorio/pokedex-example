import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '@/redux/reducers'
import masterSaga from '@/redux/sagas'

const reducer = combineReducers(reducers)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(masterSaga)

export default store
import React from 'react'
import { createStore } from 'redux'
import { LocationProvider } from '@reach/router'
import { createHistory, createMemorySource } from '@reach/router'
import { Provider } from 'react-redux'
import { combineReducers, applyMiddleware } from 'redux'
import masterSaga from '@/redux/sagas'
import reducers from '@/redux/reducers'
import createSagaMiddleware from 'redux-saga'

const reducer = combineReducers(reducers)

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(masterSaga)

let history = createHistory(window)
let source = createMemorySource('/')
history = createHistory(source)

const ProviderMock = props => {
    return (
        <Provider store={store}>
            <LocationProvider history={history}>
                { props.children }
            </LocationProvider>
        </Provider>
    )

}

export default ProviderMock

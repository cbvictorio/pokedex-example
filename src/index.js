import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App'
import store from 'ReduxFiles'

const container = document.getElementById('root')

render(
    <Provider store={store}>
        <App />
    </Provider>
    , container)


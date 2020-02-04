import { Fragment } from 'react'
import { Router } from './styles'
import Pokemons from 'Screens/Pokemons'
import Modal from 'Components/Modal'

const App = () => (
    <Fragment>
        <Router> 
            <Pokemons path="/" />
        </Router>
        <Modal />
    </Fragment>
)


export default App

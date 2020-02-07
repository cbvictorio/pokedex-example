import { Fragment } from 'react'
import { Router } from './styles'
import Pokemons from '@/screens/Pokemons'
import Modal from '@/components/Modal'

const App = () => (
    <Fragment>
        <Router> 
            <Pokemons path="/" />
        </Router>
        <Modal />
    </Fragment>
)


export default App

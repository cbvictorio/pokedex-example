import { Fragment } from 'react'
import { Router } from './styles'
import Pokemons from '@/pages/Pokemons'
import Modal from '@/components/Modal'
import NotFound from '@/components/NotFound'

const App = () => (
    <Fragment>
        <Router> 
            <Pokemons path="/" />
            <NotFound default />
        </Router>
        <Modal />
    </Fragment>
)


export default App

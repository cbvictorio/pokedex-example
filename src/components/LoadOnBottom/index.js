import { useRef, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container } from './styles'
import Loader from 'Components/Loader'
import { setAllPokemons } from 'ReduxFiles/actions/set-all-pokemons-actions'

const LoadOnBottom = ({ pokemons, setAllPokemonsDispatcher, loading }) => {
    const element = useRef(null)
    
    const observeFunction = entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
            const startingId = (pokemons.length + 1)
            
            if (startingId > 500) return
            
            const fetchingIds = Array.from(new Array(50)).map((_, i) => (startingId + i))
            setAllPokemonsDispatcher(fetchingIds)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observeFunction)
        observer.observe(element.current)

        return () => observer.disconnect()
    }, [element, pokemons])

    return (
        <Container ref={element}>
            { loading ? <Loader /> : null }
        </Container>
    )
}

const mapState = ({ allPokemonsReducer }) => ({ 
    pokemons: allPokemonsReducer.pokemons,
    loading: allPokemonsReducer.loading 
})
const mapDispatch = dispatch => ({
    setAllPokemonsDispatcher: pokemons => dispatch(setAllPokemons(pokemons))
})

export default connect(mapState, mapDispatch)(LoadOnBottom)

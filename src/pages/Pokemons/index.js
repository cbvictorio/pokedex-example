import Header from '@/components/Header'
import LoadOnBottom from '@/components/LoadOnBottom'
import { connect } from 'react-redux'
import { Container, PokemonList, Error } from './styles'
import PokemonContainer from '@/components/PokemonContainer'

const Pokemons = ({ pokemons, singlePokemon, error }) => {
    return (
        <Container>
            <Header />
            { error ? 
                <Error> { error } </Error> :
                singlePokemon ?
                    <PokemonContainer {...singlePokemon} single /> : 
                    <PokemonList>
                        {pokemons.map((pokemon, i) => 
                            <PokemonContainer key={i} {...pokemon} />
                        )}
                        <LoadOnBottom />
                    </PokemonList>
            }
        </Container>
    )
}

const mapState = ({ allPokemonsReducer, singlePokemonReducer }) => ({ 
    pokemons: allPokemonsReducer.pokemons,
    singlePokemon: singlePokemonReducer.pokemon,
    error: singlePokemonReducer.error 
})

export default connect(mapState)(Pokemons)

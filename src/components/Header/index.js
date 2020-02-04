import { useState } from 'react'
import { connect } from 'react-redux'
import logo from 'Assets/pokeapi_256.png'
import { 
    fetchSinglePokemon,
    fetchSinglePokemonCleanSearch
} from 'ReduxFiles/actions/fetch-single-pokemon-actions'
import { 
    Container,
    SearchContainer,
    PokeLogo,
    Input,
    SearchButton
} from './styles'

const Header = ({ cleanSearch, fetchPokemon }) => {

    const [pokemon, setPokemon] = useState('')

    const handleChange = e => {
        const { value } = e.target
        if (!value) {
            cleanSearch()
        }
        setPokemon(value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        searchPokemonHandler()
    }

    const searchPokemonHandler = () => {
        const searchValue = pokemon.replace(/ /g, '')
        if (!searchValue) return console.log('no search')
        fetchPokemon(searchValue)
    }

    return (
        <Container onSubmit={handleSubmit}>
            <PokeLogo src={logo} />
            <SearchContainer>
                <Input 
                    placeholder="Search pokemon by name or id..." 
                    onChange={handleChange} 
                    value={pokemon}
                />
                <SearchButton type="submit">
                    Search
                </SearchButton>
            </SearchContainer>
        </Container>
    )
}

const mapDispatch = dispatch => ({
    fetchPokemon: (idName) => dispatch(fetchSinglePokemon(idName)),
    cleanSearch: () => dispatch(fetchSinglePokemonCleanSearch())
})

export default connect(null, mapDispatch)(Header)

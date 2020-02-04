import { connect } from 'react-redux'
import { pokemonDetailsHide } from 'ReduxFiles/actions/pokemon-details-actions'
import pokemonGeneration from 'Utils/pokemon-region'
import { 
    Container,
    Title,
    CloseButton,
    ModalBody,
    DataContainer,
    DataTitle,
    DataText,
    DataInformationContainer,
    PokemonElementsContainer,
    PokemonElement,
    PokemonImage
} from './styles'

const Modal = ({ visible, pokemon, close }) => {
    
    const handleClose = () => close()

    if (!visible) return null


    return (
        <Container onClick={handleClose}>
            <CloseButton onClick={handleClose}> &times; </CloseButton>
            <ModalBody onClick={(e) => e.stopPropagation()}>
                <Title> Pokemon information </Title>
                <DataContainer>
                    <DataTitle> ID: </DataTitle>
                    <DataInformationContainer>
                        <DataText> { pokemon.id } </DataText>
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Name: </DataTitle>
                    <DataInformationContainer>
                        <DataText> { pokemon.species.name } </DataText>
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Types: </DataTitle>
                    <DataInformationContainer>
                        <PokemonElementsContainer>
                            {pokemon.types.map((element, i) => (
                                <PokemonElement key={i} element={element.type.name}>
                                    { element.type.name }
                                </PokemonElement>    
                            ))}
                        </PokemonElementsContainer>
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Region: </DataTitle>
                    <DataInformationContainer>
                        <DataText> { pokemonGeneration(pokemon.id) } </DataText>
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Abilities: </DataTitle>
                    <DataInformationContainer>
                        {
                            pokemon.abilities.map((ability, i) => (
                            <DataText key={i}> { ability.ability.name } </DataText>
                            ))
                        }
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Regular sprites: </DataTitle>
                    <DataInformationContainer>
                        <PokemonImage src={pokemon.sprites.front_default} />
                        <PokemonImage src={pokemon.sprites.back_default} />
                    </DataInformationContainer>
                </DataContainer>
                <DataContainer>
                    <DataTitle> Shiny sprites: </DataTitle>
                    <DataInformationContainer>
                        <PokemonImage src={pokemon.sprites.front_shiny} />
                        <PokemonImage src={pokemon.sprites.back_shiny} />
                    </DataInformationContainer>
                </DataContainer>
            </ModalBody>
        </Container>
    )
}

const mapState = ({ pokemonDetailsReducer }) => ({
    visible: pokemonDetailsReducer.visible,
    pokemon: pokemonDetailsReducer.pokemon
})

const mapDispatch = dispatch => ({
    close: () => dispatch(pokemonDetailsHide())
})

export default connect(mapState, mapDispatch)(Modal)
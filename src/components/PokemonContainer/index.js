import { useRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { pokemonDetailsShow } from 'ReduxFiles/actions/pokemon-details-actions'
import { 
    PokemonContainer,
    PokemonName,
    PokemonImage,
    PokemonElementsContainer,
    PokemonElement
} from './styles'


const PokemonComponent = (props) => {
    const { sprites, species, types, id, abilities } = props

    const myRef = useRef(null)
    const [visible, setVisible] = useState(false)

    const observeFunction = entries => {
        const { isIntersecting } = entries[0]
        if (isIntersecting) {
            setVisible(true)
        }
    }

    useEffect(() => {
        const observer = new IntersectionObserver(observeFunction, { threshold: 0.8 })
        observer.observe(myRef.current)
    }, [myRef])

    const handleShowDetails = () => {
        if (visible) {
            props.show({
                sprites, 
                species, 
                types, 
                id, 
                abilities
            })
        }
    }

    return (
        <PokemonContainer 
            key={props.id || i} 
            ref={myRef} 
            single={props.single}
            onClick={handleShowDetails}
        > 
            { visible ? <PokemonImage src={sprites.front_default} /> : null }
            <PokemonName> 
                { `${id}. ${species.name}` } 
            </PokemonName>
            <PokemonElementsContainer>
                {
                    types.map((element, i) => (
                        <PokemonElement key={i} element={element.type.name}>
                            { element.type.name }
                        </PokemonElement>    
                    ))
                }
            </PokemonElementsContainer>
        </PokemonContainer>
    )
}

const mapDispatch = dispatch => ({
    show: pokemon => dispatch(pokemonDetailsShow(pokemon))
})

export default connect(null, mapDispatch)(PokemonComponent)
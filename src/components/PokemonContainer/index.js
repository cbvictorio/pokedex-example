import { useRef, useState, useEffect } from 'react'
import { 
    PokemonContainer,
    PokemonName,
    PokemonImage,
    PokemonElementsContainer,
    PokemonElement
} from './styles'


const PokemonComponent = (props) => {
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

    return (
        <PokemonContainer ref={myRef} key={props.id || i} single={props.single}> 
            { visible ? <PokemonImage src={props.sprites.front_default} /> : null }
            <PokemonName> 
                { `${props.id}. ${props.species.name}` } 
            </PokemonName>
            <PokemonElementsContainer>
                {
                    props.types.map((element, i) => (
                        <PokemonElement key={i} element={element.type.name}>
                            { element.type.name }
                        </PokemonElement>    
                    ))
                }
            </PokemonElementsContainer>
        </PokemonContainer>
    )
}

export default PokemonComponent
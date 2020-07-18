import { mount } from 'enzyme'
import ProviderMock from '../__mocks__/ProviderMock'
import PokemonMock from '../__mocks__/PokemonMock'
import PokemonContainerComponent from '@/components/PokemonContainer'
import { 
    PokemonContainer,
    PokemonName,
    PokemonImage,
    PokemonElementsContainer,
    PokemonElement
} from '@/components/PokemonContainer/styles'

describe('<PokemonContainer />', () => {
    test('Rendering PokemonContainer component', () => {
        const pokemonContainer = mount(
            <ProviderMock>
                <PokemonContainerComponent {...PokemonMock} />
            </ProviderMock>
        )
        expect(pokemonContainer.length).toEqual(1)
    })
})
import { shallow, mount } from 'enzyme'
import ProviderMock from '@/__test__/__mocks__/ProviderMock'
import Header from '@/components/Header'
import { find, enzymeFind } from 'styled-components/test-utils'
import { 
    Container,
    SearchContainer,
    PokeLogo,
    Input,
    SearchButton
} from '@/components/Header/styles'

describe('Rendering a component with proper path', () => {
    test('Component rendering', () => {
        const header = shallow(
            <ProviderMock>
                <Header />
            </ProviderMock>
        )

        expect(header.length).toEqual(1)
    })
})

describe('Testing for styles for Header component', () => {
    const { body } = document
    
    test('Test for main Container styles', () => {
        const headerContainer = find(body, Container)
        expect(headerContainer).toBeDefined()
    })

    test('Test for SearchContainer form style', () => {
        const searchContainer = find(body, SearchContainer)
        expect(searchContainer).toBeDefined()
    })

    test('Test for PokeLogo styles', () => {
        const pokeLogo = find(body, PokeLogo)
        expect(pokeLogo).toBeDefined()
    })

    test('Test for Input styles', () => {
        const input = find(body, Input)
        expect(input).toBeDefined()
    })

    test('Test for SearchButton styles', () => {
        const searchButton = find(body, SearchButton)
        expect(searchButton).toBeDefined()
    })
})

describe('Testing to evaluate if Header component contains all syles', () => {
    
    const header = mount(
        <ProviderMock>
            <Header />
        </ProviderMock>
    )

    test('Test if Header contains Container styles', () => {
        const foundContainerStyles = enzymeFind(header, Container)
        expect(foundContainerStyles).toBeTruthy()
    })

    test('Test if Header contains SearchContainer styles', () => {
        const foundSearchContainerStyles = enzymeFind(header, SearchContainer)
        expect(foundSearchContainerStyles).toBeTruthy()
    })

    test('Test if Header contains PokeLogo styles', () => {
        const foundPokeLogoStyles = enzymeFind(header, PokeLogo)
        expect(foundPokeLogoStyles).toBeTruthy()
    })

    test('Test if Header contains Input styles', () => { 
        const foundInputStyles = enzymeFind(header, Input)
        expect(foundInputStyles).toBeTruthy()
    })

    test('Test if Header contains SearchButton styles', () => { 
        const foundSearchButtonStyles = enzymeFind(header, SearchButton)
        expect(foundSearchButtonStyles).toBeTruthy()
    })
})
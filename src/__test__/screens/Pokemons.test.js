import React from 'react'
import { shallow, mount } from 'enzyme'
import ProviderMock from '../__mocks__/ProviderMock'
import Pokemons from '@/pages/Pokemons'

describe('<Pokemons />', () => {
    test('Pokemons screen rendering', () => {
        const pokemons = mount(
            <ProviderMock>
                <Pokemons />
            </ProviderMock>
        )
    
        expect(pokemons.length).toEqual(1)
    })
})


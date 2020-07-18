import reducers from '@/redux/reducers'
import PokemonMock from '@/__test__/__mocks__/PokemonMock'

describe('Reducers', () => {
    test('Return initial state on all pokemons reducers', () => {
        expect(reducers.allPokemonsReducer({}, '')).toEqual({})
    })

    test('SET_ALL_POKEMONS', () => {
        const payload = PokemonMock
        const initialState = {
            pokemons: [],
            loading: true
        }
        const action = {
            type: 'SET_ALL_POKEMONS',
            payload
        }
        const expected = {
            pokemons: [],
            loading: true
        }
        expect(reducers.allPokemonsReducer(initialState, action)).toEqual(expected)
    })

    test('SET_ALL_POKEMONS_SUCCESS', () => {
        const payload = [PokemonMock]
        const initialState = {
            pokemons: [],
            loading: true
        }
        const action = {
            type: 'SET_ALL_POKEMONS_SUCCESS',
            payload
        }
        const expected = {
            pokemons: [PokemonMock],
            loading: false
        }
        expect(reducers.allPokemonsReducer(initialState, action)).toEqual(expected)
    })

    test('Return initial state on fetch single pokemon reducers', () => {
        expect(reducers.singlePokemonReducer({}, '')).toEqual({})
    })

    test('FETCH_SINGLE_POKEMON_SUCCESS', () => {
        const payload = PokemonMock
        const initialState = {
            pokemon: null,
            error: ''
        }
        const action = {
            type: 'FETCH_SINGLE_POKEMON_SUCCESS',
            payload
        }
        const expected = {
            pokemon: PokemonMock,
            error: ''
        }
        expect(reducers.singlePokemonReducer(initialState, action)).toEqual(expected)
    })

    test('FETCH_SINGLE_POKEMON_ERROR', () => {
        const payload = 'error'
        const initialState = {
            pokemon: null,
            error: ''
        }
        const action = {
            type: 'FETCH_SINGLE_POKEMON_ERROR',
            payload
        }
        const expected = {
            pokemon: null,
            error: 'error'
        }
        expect(reducers.singlePokemonReducer(initialState, action)).toEqual(expected)
    })

    test('FETCH_SINGLE_POKEMON_CLEAN_SEARCH', () => {
        const initialState = {
            pokemon: null,
            error: ''
        }
        const action = {
            type: 'FETCH_SINGLE_POKEMON_CLEAN_SEARCH'
        }
        const expected = {
            pokemon: null,
            error: ''
        }
        expect(reducers.singlePokemonReducer(initialState, action)).toEqual(expected)
    })

    test('Return initial state on pokemon details reducers', () => {
        expect(reducers.pokemonDetailsReducer({}, '')).toEqual({})
    })

    test('POKEMON_DETAILS_SHOW', () => {
        const payload = PokemonMock
        const initialState = {
            pokemon: null,
            visible: false
        }
        const action = {
            type: 'POKEMON_DETAILS_SHOW',
            payload
        }
        const expected = {
            pokemon: PokemonMock,
            visible: true
        }
        expect(reducers.pokemonDetailsReducer(initialState, action)).toEqual(expected)
    })

    test('POKEMON_DETAILS_HIDE', () => {
        const action = {
            type: 'POKEMON_DETAILS_HIDE'
        }
        const expected = {
            pokemon: null,
            visible: false
        }
        expect(reducers.pokemonDetailsReducer({}, action)).toEqual(expected)
    })
})
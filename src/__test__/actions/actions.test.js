import actions from '@/redux/actions'
import pokemonMock from '@/__test__/__mocks__/PokemonMock'

describe('Actions', () => {
    const pokemonIdPayload = '6'
    const pokemonPayload = pokemonMock
    const pokemonError = 'error'
    const setAllPokemonsIds = [1, 2 ,3]

    test('Fetch single pokemon action', () => {
        const expected = {
            type: 'FETCH_SINGLE_POKEMON',
            payload: pokemonIdPayload
        }
        expect(actions.fetchSinglePokemon(pokemonIdPayload)).toEqual(expected)
    })

    test('Fetch single pokemon success action', () => {
        const expected = {
            type: 'FETCH_SINGLE_POKEMON_SUCCESS',
            payload: pokemonPayload
        }
        expect(actions.fetchSinglePokemonSuccess(pokemonPayload)).toEqual(expected)
    })

    test('Fetch single pokemon error action', () => {
        const expected = {
            type: 'FETCH_SINGLE_POKEMON_ERROR',
            payload: pokemonError
        }
        expect(actions.fetchSinglePokemonError(pokemonError)).toEqual(expected)
    })

    test('Fetch single pokemon clean search action', () => {
        const expected = {
            type: 'FETCH_SINGLE_POKEMON_CLEAN_SEARCH'
        }
        expect(actions.fetchSinglePokemonCleanSearch()).toEqual(expected)
    })

    test('Pokemon details show action', () => {
        const expected = {
            type: 'POKEMON_DETAILS_SHOW',
            payload: pokemonPayload
        }
        expect(actions.pokemonDetailsShow(pokemonPayload)).toEqual(expected)
    })

    test('Pokemon details hide action', () => {
        const expected = {
            type: 'POKEMON_DETAILS_HIDE'
        }
        expect(actions.pokemonDetailsHide()).toEqual(expected)
    })

    test('Set all pokemons action', () => {
        const expected = {
            type: 'SET_ALL_POKEMONS',
            payload: setAllPokemonsIds
        }
        expect(actions.setAllPokemons(setAllPokemonsIds)).toEqual(expected)
    })

    test('Set all pokemons success action', () => {
        const arrayOfPokemons = Array.from(new Array(3)).map((n, i) => ({ ...pokemonPayload, id: (i + 1) }))
        const expected = {
            type: 'SET_ALL_POKEMONS_SUCCESS',
            payload: arrayOfPokemons
        }
        expect(actions.setAllPokemonsSuccess(arrayOfPokemons)).toEqual(expected)
    })
})
import styled from 'styled-components'
import { LIGHT_GRAY } from '@/utils/constants'

export const Container = styled.div`
    display: grid;
    grid-template-rows: 120px minmax(0, 1fr);
    grid-template-columns: 1fr;
    height: 100vh;
    margin: 0;
    padding: 0;
`

export const PokemonList = styled.ul`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const Error = styled.h4`
    font-size: 24px;
    color: ${LIGHT_GRAY};
    text-align: center;
`

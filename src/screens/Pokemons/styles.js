import styled from 'styled-components'
import { LIGHT_GRAY, DARK_GRAY } from '@/utils/constants'
import colorPicker from '@/utils/color-picker'

export const Container = styled.section`
    display: grid;
    grid-template-rows: 120px minmax(0, 1fr);
    grid-template-columns: 1fr;
    height: 100vh;
`

export const PokemonList = styled.div`
    overflow: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 24px;
    justify-content: center;
    align-items: center;
`

export const Error = styled.h4`
    font-size: 24px;
    color: ${LIGHT_GRAY};
    text-align: center;
`

import styled from 'styled-components'
import { LIGHT_GRAY, DARK_GRAY } from '@/utils/constants'
import colorPicker from '@/utils/color-picker'

export const Container = styled.li`
    height: 220px;
    width: 350px;
    border: 1px solid ${LIGHT_GRAY};
    border-radius: 8px;
    cursor: pointer;
    margin: 12px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
    list-style: none;

    &:hover {
        transform: scale(1.05);
    }

    @media(max-width: 1440px) {
        width: 300px;
    }

`

export const PokemonImage = styled.img``

export const PokemonName = styled.span`
    font-size: 24px;
    color: ${DARK_GRAY};
    margin-bottom: 8px;
    text-transform: capitalize;
`

export const PokemonElementsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 80%;
`

export const PokemonElement = styled.span`
    border-radius: 5px;
    width: 100px;
    height: 35px;
    background-color: ${props => colorPicker(props.element)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
`
import styled from 'styled-components'
import { LIGHT_GRAY, DARK_GRAY } from '@/utils/constants'
import colorPicker from '@/utils/color-picker'

export const Container = styled.section`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Helvetica;
    padding: 24px;
    margin: 0;
    box-sizing: border-box;
`

export const Title = styled.h3`
    font-size: 32px;
    color: black;
    text-align: center;
    margin: 0 0 24px 0;
`

export const ModalBody = styled.div`
    background-color: white;
    position: relative;
    width: 480px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    overflow: auto;
    height: 70%;

    @media(max-width: 500px) {
        width: 300px;
    }
`

export const CloseButton = styled.button`
    border: none;
    background-color: transparent;
    font-size: 25px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 10px;
    top: 10px;
    color: ${LIGHT_GRAY};
    cursor: pointer;
`

export const DataContainer = styled.div`
    width: 320px;
    height: 56px;
    border-radius: 8px;
    border: 2px solid ${LIGHT_GRAY};
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 16px;
    margin-bottom: 24px;

    @media(max-width: 500px) {
        width: 250px;
    }
`

export const DataTitle = styled.span`
    color: ${DARK_GRAY};
    font-size: 12px;
    flex: 0.4;
    text-align: center;
`

export const DataText = styled.span`
    color: black;
    font-size: 16px;
    text-transform: capitalize;
    margin-right: 8px;
`

export const DataInformationContainer = styled.div`
    flex: 1;
`

export const PokemonElementsContainer = styled.div`
    display: flex;
`

export const PokemonElement = styled.span`
    border-radius: 5px;
    flex: 0.9;
    height: 35px;
    background-color: ${props => colorPicker(props.element)};
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 14px;
    text-transform: uppercase;
    color: white;
    margin-right: 24px;
`

export const PokemonImage = styled.img`
    margin-right: 8px;
    height: 100px;
    width: auto;

    @media(max-width: 500px) {
        height: 64px;
        width: auto;
    }
`
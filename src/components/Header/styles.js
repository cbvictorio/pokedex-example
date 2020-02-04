import styled from 'styled-components'
import { RED, LIGHT_GRAY, BLUE } from 'Utils/constants'

export const Container = styled.form`
    background-color: ${RED};
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px;
`

export const PokeLogo = styled.img`
    width: 128px;
    height: auto;
    margin-right: auto;
`

export const SearchContainer = styled.section`
    height: 56px;
    flex: 0.5;
    display: flex;
    justify-content: flex-start;
    /* border: 1px solid white; */
    margin-right: auto;
`

export const Input = styled.input`
    flex: 0.7;
    border-radius: 5px;
    border: none;
    padding: 8px;
    font-size: 18px;
    
    &::placeholder {
        font-size: 18px;
        color: ${LIGHT_GRAY};
    }
`

export const SearchButton = styled.button`
    background-color: ${BLUE};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.25;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
    transition: all 0.2s;

    &:active {
        transform: scale(1.1);
    }
`
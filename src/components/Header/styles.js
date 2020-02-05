import styled from 'styled-components'
import { RED, LIGHT_GRAY, BLUE } from 'Utils/constants'

export const Container = styled.form`
    background-color: ${RED};
    color: white;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 16px;

    @media(max-width: 445px) {
        flex-wrap: wrap;
    }
`

export const PokeLogo = styled.img`
    width: 128px;
    height: auto;
    margin-right: auto;

    @media(max-width: 1024px) {
        margin-right: 24px;
    }

    @media(max-width: 445px) {
        width: 100px;
        margin-right: auto;
        margin-left: auto;
    }
`

export const SearchContainer = styled.section`
    height: 56px;
    flex: 0.8;
    display: flex;
    justify-content: flex-start;
    margin-right: auto;

    @media(max-width: 500px) {
        flex: 1;
    }
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

    @media(max-width: 768px) {
        &::placeholder {
            font-size: 12px;
        }
    }
`

export const SearchButton = styled.button`
    background-color: ${BLUE};
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0.2;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    margin-left: 8px;
    transition: all 0.2s;

    &:active {
        transform: scale(1.1);
    }

    @media(max-width: 768px) {
        font-size: 14px;
        flex: 1;
    }

    @media(max-width: 378px) {
        flex: 1;
    }
`
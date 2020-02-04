import styled, { keyframes } from 'styled-components'
import { RED } from 'Utils/constants'

const bounceDelayAnimation = keyframes`
    0%, 80%, 100% { 
        transform: scale(0);
    } 40% { 
        transform: scale(1.0);
    }
`

export const Container = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 3px solid ${RED};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.7s;
    transition-delay: 3s;
    transition-timing-function: ease-in-out;
`

export const Spinner = styled.div`
    margin: 100px auto 0;
    width: 70px;
    text-align: center;
`

export const BounceOne = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${RED};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelayAnimation} 1s infinite ease-in-out both;
    animation-delay: -0.32s;
`

export const BounceTwo = styled.div`
    width: 12px;
    height: 12px;
    background-color: ${RED};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelayAnimation} 1s infinite ease-in-out both;
    animation-delay: -0.16s;
    margin: 0 4px;
`

export const BounceThree = styled.div`
    width: 18px;
    height: 18px;
    background-color: ${RED};
    border-radius: 100%;
    display: inline-block;
    animation: ${bounceDelayAnimation} 1s infinite ease-in-out both;
`
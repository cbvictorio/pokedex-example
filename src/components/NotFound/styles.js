import styled from 'styled-components'
import { RED } from '@/utils/constants'
import { Link as LinkRoute } from '@reach/router'

export const Container = styled.section`
    height: 100vh;
    margin: 0;
    box-sizing: border-box;
    background-color: ${RED};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
`

export const Title = styled.h1`
    color: white;
    font-family: Helvetica;
    margin: 0 0 8px 0;
    font-size: 32px;
`

export const Logo = styled.img`
    margin-bottom: 24px;
`

export const Description = styled.span`
    font-size: 20px;
    color: white;
    text-align: center;
    font-family: Helvetica;
    margin-bottom: 8px;
`

export const Link = styled(LinkRoute)`
    color: white;
    text-align: center;
    font-family: Helvetica;
`
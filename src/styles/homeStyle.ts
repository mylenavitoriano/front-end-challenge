import styled from 'styled-components'

export const HomeStyle = styled.main`
    padding: 6.25rem 0 6.625rem;
    background: #FFF;
`

export const Container = styled.div`
    max-width: 58.625rem;
    width: 100%;
    margin-inline: auto;

    .listCards{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        row-gap: 2rem;
        column-gap: .5rem;
        margin-top: 7.25rem;
    }
`

export const Footer = styled.footer`
    background-color: #EEEEEE;
    width: 100%;
    padding: .5rem 0;
    
    p{
        font-size: .75rem;
        color: #000;
        text-align: center;
    }
`
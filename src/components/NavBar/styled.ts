import styled from 'styled-components'

export const NavBar = styled.nav`
    width: 100%;
    background-color: #0F52BA;
    height: 6.25rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    color: #FFF;
    padding: 0 4.75rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h1.logo{
        font-weight: 600;
        font-size: 2.5rem;

        span{
            font-weight: 300;
            font-size: 1.25rem;
        }
    }

    .shoppingCart{
        background-color: #FFF;
        border-radius: .5rem;
        padding: 0.625rem 1rem;
        color: #000;

        font-weight: 700;
        font-size: 1.125rem;

        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: .875rem;

        cursor: pointer;
    }
`
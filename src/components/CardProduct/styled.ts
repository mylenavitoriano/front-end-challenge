import styled from 'styled-components'

export const Card = styled.div`
    max-width: 14rem;
    height: 18.75rem;
    width: 100%;
    background-color: #FFF;
    border-radius: .5rem;
    box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
    text-align: center;
    padding: 1.125rem .75rem 2.5rem .875rem;
    position: relative;

    img{
        width: max-content;
        max-height: 8.625rem;
    }

    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;

        p{
            font-size: 1rem;
            font-weight: 400;
            color: #2C2C2C;
            max-width: 7.75rem;
            text-align: start;
        }

        h1{
            font-size: 1rem;
            font-weight: 700;
            color: #FFFFFF;
            border-radius: 0.375rem;
            background-color: #373737;
            padding: 0.25rem 0.375rem;
        }
    }

    .description{
        font-size: 0.625rem;
        font-weight: 300;
        color: #2C2C2C;
        text-align: start;
        margin: .5rem 0 .875rem;
        line-height: 0.75rem;
    }

    button{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.875rem;
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: #0F52BA;
        border: 0;
        border-radius: 0 0 .5rem .5rem;
        padding: 0.5rem 0;

        font-size: 0.875rem;
        font-weight: 600;
        color: #FFF;

        transition: all ease .3s;

        &:hover{
            cursor: pointer;
            filter: brightness(.9);
        }
    }
`
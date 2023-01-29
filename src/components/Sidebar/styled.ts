import styled from 'styled-components'

interface SidebarProps{
    display: boolean
}

export const SidebarStyled = styled.div<SidebarProps>`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 999;
    width: 30.375rem;
    height: 100%;
    max-height: 100vh;
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    display: ${(props) => props.display ? 'block' : 'none'};
`

export const Container = styled.div`
    position: relative;
    height: 100%;

    .header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        padding: 0 3.125rem 0;
        position: absolute;
        top: 2rem;
        right: 0;
        z-index: 9999;
        width: 100%;

        h1{
            font-family: 'Montserrat';
            font-weight: 700;
            font-size: 1.75rem;
            color: #fff;
            max-width: 11.25rem;
        }

        .buttonClose{
            background: #000;
            border: 0;
            height: 2.375rem;
            width: 2.375rem;
            clip-path: circle();
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            margin-right: -1rem;
        }
    }

    .listProducts{
        position: absolute;
        top: 8.125rem;
        right: 2rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 1rem;
        max-height: 20.625rem;
        overflow-y: scroll;

        &::-webkit-scrollbar {
            width: 12px;
        }

        &::-webkit-scrollbar-track {
            background: #0F52BA;
        }

        &::-webkit-scrollbar-thumb {
            background-color: #FFF;
            border-radius: 20px;
            border: 1px solid #FFF;  
        }
    }

    .footer{
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        z-index: 9999;
        background-color: #0F52BA;

        .amount{
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 3.125rem;

            h1, span{
                font-weight: 700;
                font-size: 1.75rem;
                color: #FFF;
            }
        }

        .buttonCheckout{
            width: 100%;
            border: 0;
            height: 5rem;
            background-color: #000;
            margin-top: 2rem;

            font-size: 1.75rem;
            color: #FFF;
            font-weight: 700;

            cursor: pointer;
        }
    }
`

export const ItemShoppingCart = styled.div`
    width: 100%;
    height: 5.9375rem;
    padding: 1.25rem 1.875rem 1.25rem 1.25rem;
    background-color: #FFF;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    position: relative;

    .removeItem{
        position: absolute;
        top: -.5rem;
        right: -.5rem;
        background: #000;
        border: 0;
        height: 1.25rem;
        width: 1.25rem;
        clip-path: circle();
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    img{
        max-height: 3.75rem;
    }

    .title{
        font-weight: 400;
        font-size: 0.8125rem;
        color: #2C2C2C;
        width: 7rem;
    }

    .qtd{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .25rem;

        .label{
            font-size: 0.5rem;
        }

        .groupButtons{
            display: flex;
            border: 1px solid #BFBFBF;
            border-radius: 0.25rem;
            padding:.25rem;

            button{
                width: 1rem;
                border: 0;
                border-radius: 0;
                background-color: transparent;
                cursor: pointer;
            }

            input{
                width: 1.5rem;
                outline: none;
                border: 0;
                border-left: 1px solid #BFBFBF;
                border-right: 1px solid #BFBFBF;
                text-align:center;
                padding: 0 .25rem;
                
            }
        }
    }

    .price{
        font-weight: 700;
        font-size: .875rem;
    }
`
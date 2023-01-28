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
    background-color: #0F52BA;
    box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
    padding: 2.25rem 3.125rem 0;
    display: ${(props) => props.display ? 'block' : 'none'};

    .header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

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
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1.375rem;
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
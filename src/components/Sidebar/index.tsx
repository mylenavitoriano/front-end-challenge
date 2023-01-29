import { use, useEffect, useState } from "react";
import { Container, ItemShoppingCart, SidebarStyled } from "./styled";

import { MdOutlineClose } from 'react-icons/md'

interface Product {
    id: number,
    name: string,
    brand: string,
    description: string,
    photo: string,
    price: string,
    createdAt: string,
    updatedAt: string
}

interface ItemShoppingCart{
    qtd: number,
    product: Product
}

interface ListItemShoppingCart extends Array<ItemShoppingCart>{}

export function Sidebar(props: any){

    const [listProducts, setListProduct] = useState<ListItemShoppingCart>(props.listProducts)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setListProduct(props.listProducts)
    }, [props.listProducts])

    useEffect(() => {
        setListProduct(props.listProducts)
    }, [])

    // useEffect(() => {
    //     listProducts.map(item => {
    //         console.log(parseInt(item.product.price), item.qtd, amount)
    //         setAmount(amount + ((parseInt(item.product.price) * item.qtd)))
    //     })
    // }, [listProducts])

    // Finalizar processo de soma do carrinho

    return(
        <SidebarStyled display={props.sidebar}>
            <Container>
                <div className="header">
                    <h1>Carrinho de compras</h1>
                    <button className="buttonClose" onClick={() => props.handleSidebar()}>
                        <MdOutlineClose size={22} color={"#FFF"}/>
                    </button>
                </div>

                <div className="listProducts">
                    {listProducts.length != 0 && listProducts.map((item, index) => {
                        let indexOf = item.product.price.indexOf('.')

                        return(
                            <ItemShoppingCart key={index}>
                                <button className="removeItem" onClick={() => props.removeItem(item)}>
                                    <MdOutlineClose size={16} color={"#FFF"}/>
                                </button>
                                <img src={item.product.photo} alt={item.product.name} />
                                <p className="title">{item.product.name}</p>
                                <div className="qtd">
                                    <p className="label">Qtd:</p>

                                    <div className="groupButtons">
                                        <button onClick={() => props.changeQtdItem(item, "subtract")}>-</button>
                                        <input type="text" value={item.qtd}/>
                                        <button onClick={() => props.changeQtdItem(item, "add")}>+</button>
                                    </div>
                                </div>

                                <p className="price">R${item.product.price.slice(0,indexOf)}</p>
                            </ItemShoppingCart>
                        )
                    })}
                </div>

                <div className="footer">
                    <div className="amount">
                        <h1>Total:</h1>
                        <span>R$ {amount}</span>
                    </div>

                    <button className="buttonCheckout" onClick={() => {props.checkout(); setAmount(0)}}>Finalizar Compra</button>
                </div>
            </Container>
        </SidebarStyled>
    )
}
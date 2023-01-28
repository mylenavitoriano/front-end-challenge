import { use, useEffect, useState } from "react";
import { ItemShoppingCart, SidebarStyled } from "./styled";

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

interface Products extends Array<Product>{}

export function Sidebar(props: any){

    const [listProducts, setListProduct] = useState<Products>(props.listProducts)

    useEffect(() => {
        console.log(props.listProducts)
        setListProduct(props.listProducts)
    }, [props.listProducts])

    return(
        <SidebarStyled display={props.sidebar}>
            <div className="header">
                <h1>Carrinho de compras</h1>
                <button className="buttonClose" onClick={() => props.handleSidebar()}>
                    <MdOutlineClose size={22} color={"#FFF"}/>
                </button>
            </div>

            <div className="listProducts">
                {listProducts.length != 0 && listProducts.map((item, index) => {
                    let indexOf = item.price.indexOf('.')

                    return(
                        <ItemShoppingCart key={index}>
                            <button className="removeItem"><MdOutlineClose size={16} color={"#FFF"}/></button>
                            <img src={item.photo} alt={item.name} />
                            <p className="title">{item.name}</p>
                            <div className="qtd">
                                <p className="label">Qtd:</p>

                                <div className="groupButtons">
                                    <button>-</button>
                                    <input type="text" value="1"/>
                                    <button>+</button>
                                </div>
                            </div>

                            <p className="price">R${item.price.slice(0,indexOf)}</p>
                        </ItemShoppingCart>
                    )
                })}
            </div>
        </SidebarStyled>
    )
}
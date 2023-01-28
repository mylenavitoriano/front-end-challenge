import { Card } from "./styled"
import { FiShoppingBag } from 'react-icons/fi'

interface Props {
    product: {
        id: number,
        name: string,
        brand: string,
        description: string,
        photo: string,
        price: string,
        createdAt: string,
        updatedAt: string
    },
    addShoppingCart: any
}
export function CardProduct({ product, addShoppingCart }: Props){
    let indexOf = product.price.indexOf('.')

    return(
        <Card>
            <img src={product.photo} alt={product.name} />
            <div className="title">
                <p>{product.name}</p>
                <h1>
                    R${product.price.slice(0,indexOf)}
                </h1>
            </div>

            <p className="description">{product.description}</p>

            <button onClick={() => addShoppingCart(product)}>
                <FiShoppingBag size={16}/>
                Comprar
            </button>
        </Card>
    )
}
import { NavBar } from "./styled";
import { RiShoppingCart2Fill } from 'react-icons/ri'

interface Props{
    countItemsShoppingCart: number
}

export function Navbar({ countItemsShoppingCart }: Props){
    return(
        <NavBar>
            <h1 className="logo">
                MKS <span>Sistemas</span>
            </h1>

            <div className="shoppingCart">
                <RiShoppingCart2Fill color={"#000"} size={20} />
                {countItemsShoppingCart}
            </div>
        </NavBar>
    )
}
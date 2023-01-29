import { CardProduct } from "@/components/CardProduct";
import { Navbar } from "@/components/NavBar";
import { Sidebar } from "@/components/Sidebar";
import { Container, HomeStyle } from "@/styles/homeStyle";
import axios from "axios";
import { useEffect, useState } from "react"

export default function Home() {

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

  interface Products extends Array<Product>{}
  interface ListItemShoppingCart extends Array<ItemShoppingCart>{}

  const [products, setProducts] = useState<Products>([])
  const url = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC"
  const [itemsShoppingCart, setItemsShoppingCart] = useState<ListItemShoppingCart>([])
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    axios.get(url) 
      .then((response) => setProducts(response.data.products))
      .catch((error) => {console.log(error)});
  }, [])

  function addShoppingCart(product: Product){
    const copyItems = [...itemsShoppingCart]

    let item = copyItems.find((item) => item.product.id === product.id)

    if(!item){
      copyItems.push({
        "qtd": 1,
        "product": product
      })
    }else{
      item.qtd = item.qtd + 1
    }

    setItemsShoppingCart(copyItems)
  }

  function changeQtdItem(productItem: ItemShoppingCart, operation: string){
    const copyItems = [...itemsShoppingCart]

    let item = copyItems.find((item) => item.product.id === productItem.product.id)

    if(item){
        if(operation === "add"){
            item.qtd = item.qtd + 1
        }else if(operation === "subtract"){
            item.qtd = item.qtd - 1
        }

        if(item.qtd === 0){
            copyItems.splice(copyItems.indexOf(item), 1);
        }
    }

    setItemsShoppingCart(copyItems)
  }

  function removeItem(productItem: ItemShoppingCart){
    const copyItems = [...itemsShoppingCart]

    let item = copyItems.find((item) => item.product.id === productItem.product.id)

    if(item){
      copyItems.splice(copyItems.indexOf(item), 1);
    }

    setItemsShoppingCart(copyItems)
  }

  function handleSidebar(){
    setSidebar(!sidebar)
  }

  function checkout(){
    setItemsShoppingCart([])
  }

  return (
    <>
      <Navbar countItemsShoppingCart={itemsShoppingCart.length} handleSidebar={handleSidebar} />
      <Sidebar listProducts={itemsShoppingCart} open={true} handleSidebar={handleSidebar} sidebar={sidebar} changeQtdItem={changeQtdItem} removeItem={removeItem} checkout={checkout}/>

      <HomeStyle>
        <Container>
          <section className="listCards">
            {products.map(item => (
              <CardProduct product={item} addShoppingCart={addShoppingCart} key={item.id}/>
            ))}
          </section>
        </Container>
      </HomeStyle>
    </>
  )
}

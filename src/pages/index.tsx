import { CardProduct } from "@/components/CardProduct";
import { Navbar } from "@/components/NavBar";
import { Sidebar } from "@/components/Sidebar";
import { Container, Footer, HomeStyle } from "@/styles/homeStyle";
import axios from "axios";
import { useEffect, useState } from "react"

import Stack from '@mui/material/Stack'; 
import Skeleton from '@mui/material/Skeleton';

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
  const [amount, setAmount] = useState(0)
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setTimeout(() => {
      axios.get(url) 
        .then((response) => {setProducts(response.data.products), setLoading(false)})
        .catch((error) => {console.log(error)});
    }, 3000)
  }, [])

  useEffect(() => {
    console.log(loading)

  }), [loading]
  
  function addAmount(price: number){
    setAmount(amount + price)
  }

  function subtractAmount(price: number){
    setAmount(amount - price)
  }
  
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
    addAmount(parseInt(product.price))
  }

  function changeQtdItem(productItem: ItemShoppingCart, operation: string){
    const copyItems = [...itemsShoppingCart]

    let item = copyItems.find((item) => item.product.id === productItem.product.id)

    if(item){
        if(operation === "add"){
            item.qtd = item.qtd + 1
            addAmount(parseInt(productItem.product.price))
        }else if(operation === "subtract"){
            item.qtd = item.qtd - 1
            subtractAmount(parseInt(productItem.product.price))
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
    subtractAmount(parseInt(productItem.product.price) * productItem.qtd)

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
    setAmount(0)
  }

  return (
    <>
      <Navbar countItemsShoppingCart={itemsShoppingCart.length} handleSidebar={handleSidebar} />
      <Sidebar listProducts={itemsShoppingCart} open={true} handleSidebar={handleSidebar} sidebar={sidebar} changeQtdItem={changeQtdItem} removeItem={removeItem} checkout={checkout} amount={amount} subtractAmount={subtractAmount}/>

      <Stack spacing={1}>
        <HomeStyle onClick={() => setSidebar(false)}>
          <Container>
            <section className="listCards">
              {loading && Array.from({ length: 8 }).map((_, i) => (
                  <Skeleton variant="rectangular" width={224} height={300}></Skeleton>
                ))
              }

              {!loading && products.map(item => (
                  <CardProduct product={item} addShoppingCart={addShoppingCart} key={item.id} />
                ))
              }
            </section>
          </Container>
        </HomeStyle>
      </Stack>

      <Footer>
          <p>MKS sistemas © Todos os direitos reservados</p>
      </Footer>
    </>
  )
}

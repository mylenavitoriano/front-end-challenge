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

  interface Products extends Array<Product>{}

  const [products, setProducts] = useState<Products>([])
  const url = "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC"
  const [itemsShoppingCart, setItemsShoppingCart] = useState<Products>([])
  const [sidebar, setSidebar] = useState(false)

  useEffect(() => {
    axios.get(url) 
      .then((response) => setProducts(response.data.products))
      .catch((error) => {console.log(error)});
  }, [])

  function addShoppingCart(product: Product){
    setItemsShoppingCart(array => [...array, product])
    console.log(itemsShoppingCart)
  }

  function handleSidebar(){
    setSidebar(!sidebar)
  }

  return (
    <>
      <Navbar countItemsShoppingCart={itemsShoppingCart.length} handleSidebar={handleSidebar} />
      <Sidebar listProducts={itemsShoppingCart} open={true} handleSidebar={handleSidebar} sidebar={sidebar}/>

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

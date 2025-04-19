import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
 

  return (
    <>
      <Header/>
      <ProductCard name="Apple Laptop" description="lorem sdaf sad sad " price="1000/=" picture="https://picsum.photos/id/2/200/300" />
     
      <ProductCard name="Gaming Laptop" description="lorem sdaf sad sad " price="1000/=" picture="https://picsum.photos/id/3/200/300" />
    </>
  )
}

export default App

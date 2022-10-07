import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Catalog from "../../features/catalog/Catalog";
import { Product } from "../model/product";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/Product')
    .then(r => r.json())
    .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    setProducts(prevState => [...prevState, {
      id: prevState.length + 101,
      name: 'product' + (prevState.length + 1),
      price: (prevState.length * 100) + 100,
      brand: 'a brand',
      description: 'a description',
      pictureUrl: 'http://picsum.photos/200'
    }])
  }

  return (
    <>
       <Typography variant="h1">EStore</Typography>
       <Catalog products={products} addProduct={addProduct} />
    </>
  );
}

export default App;

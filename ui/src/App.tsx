import { useState, useEffect } from "react";
import { Product } from "./product";

function App() {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/Product')
    .then(r => r.json())
    .then(data => setProducts(data));
  }, []);

  return (
    <div>
       <h1>EStore</h1>
       <ul>
        {
          products.map((product) => (
            <li key={product.id}>{product.name}</li>
          ))
        }
       </ul>
    </div>
  );
}

export default App;

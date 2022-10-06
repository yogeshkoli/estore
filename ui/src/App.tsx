import { useState, useEffect } from "react";

function App() {

  const [products, setProducts] = useState([
    {
      name: 'product', price: 100
    }
  ]);

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
          products.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))
        }
       </ul>
    </div>
  );
}

export default App;

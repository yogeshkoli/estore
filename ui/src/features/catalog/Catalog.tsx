import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import { Product } from "../../app/model/product"
import ProductList from "./ProductList";

export default function Catalog() {

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
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}
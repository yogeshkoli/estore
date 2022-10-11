import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/model/product"
import ProductList from "./ProductList";

export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
         agent.Catalog.list().then(products => setProducts(products));
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
            <br></br>
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}
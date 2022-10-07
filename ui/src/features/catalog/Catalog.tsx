import { Button } from "@mui/material";
import { Product } from "../../app/model/product"
import ProductList from "./ProductList";

interface Props{
    products: Product[];
    addProduct: () => void;
}

export default function Catalog({products, addProduct} : Props) {
    return (
        <>
            <h1>Catalog</h1>
            <ProductList products={products} />
            <Button variant="contained" onClick={addProduct}>Add Product</Button>
        </>
    )
}